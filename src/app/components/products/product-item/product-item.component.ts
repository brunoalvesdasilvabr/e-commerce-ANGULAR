import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ComponentComunicatorService } from 'src/app/services/componentComunicator/component-comunicator.service';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { Product } from 'src/app/models/product/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() productItem:Product
@Input() productIndex:number

addedToCarrinho = false;

  constructor(private productService:ProductService, private comunicator:ComponentComunicatorService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {

  }

  addToCart(item){
    this.addedToCarrinho = true
      this.comunicator.sentToCarrinho(item)
  }

}
