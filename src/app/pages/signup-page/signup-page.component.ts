import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { Signup } from '../../models/auth';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  constructor(
    private signupService: SignupService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  signupForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
  });
  preview: Signup = {};
  onSubmit() {
    this.preview = this.signupForm.value;
    if (this.preview.email && this.preview.password && this.preview.name) {
      this.signupService.userSignup(this.preview).subscribe((data: any) => {
        // console.log(data);
        localStorage.setItem('CID', data['id']);
        this.signupService.isLogin = true;
        this.router.navigate(['/home']);
      });
    } else {
      alert('Please provide all the details');
    }
  }
  ngOnInit(): void {
    if (localStorage.getItem('CID')) {
      this.signupService.isLogin = true;
      this.router.navigate(['/home']);
    }
  }
}
