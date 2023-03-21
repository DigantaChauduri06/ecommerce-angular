import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent {
  productsData: Products[] = [
    {
      id: 1,
      name: 'Fresh Vegetables',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/fresh-vegetables.png',
    },
    {
      id: 2,
      name: 'Diet Foods',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/diet-foods.png',
    },
    {
      id: 3,
      name: 'Diet Nutrition',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/diet-nutrition.png',
    },
    {
      id: 4,
      name: 'Fast Food Items',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/fast-food.png',
    },
    {
      id: 5,
      name: 'Fruits Items',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/fruits-items.png',
    },
    {
      id: 6,
      name: 'Healthy Foods',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/healthy-foods.png',
    },
    {
      id: 7,
      name: 'Grocery Items',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/grocery-items.png',
    },
    {
      id: 8,
      name: 'Quality Milk',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/quality-milk.png',
    },
    {
      id: 9,
      name: 'Cold Drinks',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/cold-drinks.png',
    },
    {
      id: 10,
      name: 'Beaf Steak',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/beaf-steak.png',
    },
    {
      id: 11,
      name: 'Vitamin Items',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/vitamin-items.png',
    },
    {
      id: 12,
      name: 'Raw Chicken',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/raw-chicken.png',
    },
    {
      id: 13,
      name: 'Breakfast Item',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/breakfast-item.png',
    },
    {
      id: 14,
      name: 'Fish Items',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/fish-items.png',
    },
    {
      id: 15,
      name: 'Green Vegetables',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/green-vegetables.png',
    },
    {
      id: 15,
      name: 'Cookies & Biscuits',
      imageURL:
        'https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/cookies-biscuits.png',
    },
  ];
}