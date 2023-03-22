import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private signupService: SignupService, private router: Router) {}
  ngOnInit() {
    if (!this.signupService.isLogin) {
      this.router.navigate(['/login']);
    }
  }
}
