import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AllProdcuts } from '../models/all-prodcuts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cartPrice: number = 0;
  cartItems: any = [];
  cartMap: Map<number, [number, AllProdcuts]> = new Map();
  cartEmitter = new BehaviorSubject<any>([
    this.cartItems,
    this.cartMap,
    this.cartPrice,
  ]);

  addToCart(product: AllProdcuts) {
    this.cartItems.push(product);
    this.cartPrice += product.price;
    const productQuantity = this.cartMap.get(product.id);
    if (productQuantity == undefined) {
      this.cartMap.set(product.id, [1, product]);
    } else {
      this.cartMap.set(product.id, [productQuantity[0] + 1, product]);
    }
    this.cartEmitter.next([this.cartItems, this.cartMap, this.cartPrice]);
  }
  removeFromCart(product: AllProdcuts) {
    // this.cartPrice -= product.price;
    let totalProduct = this.cartMap.get(product.id)?.[0];
    this.cartPrice -= totalProduct! * product.price;
    this.cartItems = this.cartItems.filter(
      (item: AllProdcuts) => item != product
    );
    console.log(this.cartItems);
    this.cartMap.delete(product.id);
    this.cartEmitter.next([this.cartItems, this.cartMap, this.cartPrice]);
  }
  removeFromCartSingle(product: AllProdcuts) {
    this.cartPrice -= product.price;
    const index = this.cartItems.indexOf(product);
    this.cartItems.splice(index, 1);
    console.log(this.cartItems);
    if (this.cartMap.get(product.id) === undefined) {
      this.cartMap.delete(product.id);
    } else {
      this.cartMap.set(product.id, [
        this.cartMap.get(product.id)![0] - 1,
        product,
      ]);
    }
    this.cartEmitter.next([this.cartItems, this.cartMap, this.cartPrice]);
  }
}
