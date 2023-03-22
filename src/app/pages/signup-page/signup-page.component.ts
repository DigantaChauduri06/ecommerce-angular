import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Signup } from '../../models/auth';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  constructor(private signupService: SignupService, private fb: FormBuilder) {}
  signupForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
  });
  preview: Signup = {};
  onSubmit() {
    this.preview = this.signupForm.value;
    if (this.preview.email && this.preview.password && this.preview.name) {
      this.signupService.userSignup(this.preview).subscribe((data) => {
        console.log(data);
      });
    } else {
      alert('Please provide all the details');
    }
  }
}
