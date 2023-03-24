import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/auth';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(
    private signupService: SignupService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  signinForm = this.fb.group({
    email: [''],
    password: [''],
  });
  preview: any = {};
  onSubmit() {
    this.preview = this.signinForm.value;
    console.log(this.preview);
    if (this.preview.email && this.preview.password) {
      this.signupService
        .isUserPresent(this.preview.email)
        .subscribe((result: any) => {
          // console.log('res ', result);
          if (result.length === 0) return;
          else {
            if (result[0].password === this.preview.password) {
              localStorage.setItem('CID', result[0].id);
              this.signupService.isLogin = true;
              this.router.navigate(['/home']);
            }
          }
        });
    }
  }
}
