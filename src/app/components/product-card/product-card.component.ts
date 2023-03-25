import { Component, Input, OnInit } from '@angular/core';
import { AllProdcuts } from '../../models/all-prodcuts';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: AllProdcuts = {} as AllProdcuts;
  @Input() productCount: number | undefined = undefined;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    // console.log(this.product);
  }
  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
