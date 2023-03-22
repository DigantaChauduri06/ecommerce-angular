import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from '../../services/products.service';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  constructor(
    private signupService: SignupService,
    private ProductsService: ProductsService,
    private router: Router
  ) {}
  getData() {
    this.ProductsService.getProductData().subscribe((data: any): void => {
      this.productsData = data;
    });
  }
  ngOnInit() {
    if (!this.signupService.isLogin) {
      this.router.navigate(['/login']);
    }
    this.getData();
  }
  productsData: Products[] = [];
}
