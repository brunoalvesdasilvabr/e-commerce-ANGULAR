import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productsList = []
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productsList = this.productService.products
 
  }

}
