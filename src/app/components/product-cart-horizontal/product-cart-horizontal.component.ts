import { Component, Input } from '@angular/core';
import { AllProdcuts } from 'src/app/models/all-prodcuts';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-cart-horizontal',
  templateUrl: './product-cart-horizontal.component.html',
  styleUrls: ['./product-cart-horizontal.component.scss'],
})
export class ProductCartHorizontalComponent {
  constructor(private cartService: CartService) {}
  @Input() productCount: number = 0;
  @Input() product: AllProdcuts = {} as AllProdcuts;
  handleRemove() {
    this.cartService.removeFromCartSingle(this.product);
  }
  handleRemoveAll() {
    this.cartService.removeFromCart(this.product);
  }
}
