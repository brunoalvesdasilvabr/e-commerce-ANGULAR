import { Component, OnInit } from '@angular/core';
import { ComponentComunicatorService } from 'src/app/services/componentComunicator/component-comunicator.service';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
carrinhoList = []
  constructor(private comunicator: ComponentComunicatorService, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carrinhoList = this.carrinhoService.carrinhoList
    console.log('dados carrinho')
    console.log(this.carrinhoList)
  }

}
