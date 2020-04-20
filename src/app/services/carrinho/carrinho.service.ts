import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
carrinhoList = []
  constructor() { }


  addToCarrinho(item){
    this.carrinhoList.push(item)
  }
}
