import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../envioments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProductData() {
    return this.http.get(`${environment.apiURL}/products`);
  }
  getAllProductDetails() {
    return this.http.get(`${environment.apiURL}/all-products`);
  }
}
