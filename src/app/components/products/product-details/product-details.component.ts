import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { ComponentComunicatorService } from 'src/app/services/componentComunicator/component-comunicator.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
tamanhoSelected = false
productItemDetails
  constructor(private route: ActivatedRoute,private productService:ProductService,private comunicator:ComponentComunicatorService) { }

  ngOnInit(): void {
      this.route.params.subscribe((params:Params)=>{
          console.log(+params['id'])
          this.productItemDetails = this.productService.getItem(+params['id'])
         console.log( this.productItemDetails.tamanhos)
      })
  }
  onSelectTamanho(param){
   console.log(param)
  }
  addToCart(item){
    // this.addedToCarrinho = true
      this.comunicator.sentToCarrinho(item)
  }


}
