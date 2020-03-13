import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  products: any[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "descasdcasdc",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "../../../assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Garden Cart2",
      "productCode": "GDN-0024",
      "releaseDate": "March 19, 2019",
      "description": "descasffffdcasdc",
      "price": 34.99,
      "starRating": 1.2,
      "imageUrl": "assets/images/garden_cart.png"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
