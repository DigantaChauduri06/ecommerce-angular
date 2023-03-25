import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { SignupService } from 'src/app/services/signup.service';
import { AllProdcuts } from '../../models/all-prodcuts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private signupService: SignupService,
    private router: Router,
    private productsService: ProductsService
  ) {}
  data: AllProdcuts[] = [] as AllProdcuts[];
  ngOnInit() {
    if (!this.signupService.isLogin) {
      this.router.navigate(['/login']);
    }
    this.productsService.getAllProductDetails().subscribe((data: any) => {
      // console.log(data);
      this.data = data;
    });
  }
}
