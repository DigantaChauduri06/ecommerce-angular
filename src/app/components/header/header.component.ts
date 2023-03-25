import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public signupService: SignupService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.cartService.cartEmitter.subscribe((data) => {
      this.cartCount = data[0].length;
    });
    this.isLogin = this.signupService.isLogin;
    // this.signupService.loginEmitter.subscribe((data) => {
    //   this.isLogin = data;
    // });
  }
  searchText: string = '';
  cartCount: number = 0;
  searchProduct() {
    // console.log(this.searchText);
  }
  isLogin: boolean = false;
  handleLogout() {
    this.signupService.logout();
  }
}
