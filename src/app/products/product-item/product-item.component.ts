import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() productItem:number
item
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.item = this.productService.products[this.productItem]
  //  console.log(this.productItem)
  }

}
