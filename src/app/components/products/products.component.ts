import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productsList = []
loading = false
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

fetchProducts(){
  this.loading = true
  this.productService.getProdutcts().subscribe((response)=>{
    this.productService.products = response
    this.productsList = this.productService.products
    this.loading = false
  })
}

}
