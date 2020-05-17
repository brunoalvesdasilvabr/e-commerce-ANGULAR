import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product/product.model'
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ComponentComunicatorService } from 'src/app/services/componentComunicator/component-comunicator.service';
@Component({
  selector: 'app-carrinho-item',
  templateUrl: './carrinho-item.component.html',
  styleUrls: ['./carrinho-item.component.css']
})
export class CarrinhoItemComponent implements OnInit {
@Input() carrinhoItem
@Input() itemIndex:number
  constructor(private CarrinhoService:CarrinhoService, 
    private comunicator:ComponentComunicatorService) { }

  ngOnInit(): void {
  }


  removeItem(){
     this.CarrinhoService.deleteFromCarrinho(this.itemIndex)
    
  }
  

}
