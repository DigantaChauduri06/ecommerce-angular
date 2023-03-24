import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AllProdcuts } from '../../models/all-prodcuts';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: AllProdcuts = {} as AllProdcuts;
  ngOnInit() {
    // console.log(this.product);
  }
}
