import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllProdcuts } from 'src/app/models/all-prodcuts';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit, OnDestroy {
  constructor(private CartService: CartService, private router: Router) {}
  products: AllProdcuts[] = [];
  cartValue: number = 0;
  productMap: Map<AllProdcuts, [number, AllProdcuts]> = new Map();
  ngOnInit() {
    console.log('CartPageComponent created');

    this.CartService.cartEmitter.subscribe((data) => {
      this.products = data[0];
      this.productMap = data[1];
      this.cartValue = data[2];
    });
    console.log(this.productMap);
  }
  navigateToShop() {
    this.router.navigate(['/home']);
  }
  ngOnDestroy() {
    console.log('CartPageComponent destroyed');
  }
}
