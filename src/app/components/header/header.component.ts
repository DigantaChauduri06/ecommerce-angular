import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public signupService: SignupService) {}
  searchText: string = '';
  searchProduct() {
    // console.log(this.searchText);
  }
  isLogin: boolean = false;
  handleLogout() {
    this.signupService.logout();
  }
}
