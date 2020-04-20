import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ComponentComunicatorService } from 'src/app/services/componentComunicator/component-comunicator.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() productItem
@Input() productIndex
item
  constructor(private productService:ProductService, private comunicator:ComponentComunicatorService) { }

  ngOnInit(): void {

  }

  addToCart(item){
this.comunicator.sentToCarrinho(item)
  }

}
