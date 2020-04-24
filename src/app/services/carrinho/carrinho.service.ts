import { Injectable } from '@angular/core';
import { ComponentComunicatorService } from '../componentComunicator/component-comunicator.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
carrinhoList = []
  constructor(private comunicator:ComponentComunicatorService) { }


  addToCarrinho(item){
let productExists = false
      this.carrinhoList.forEach((carrinhoItem)=>{
            if(carrinhoItem.id == item.id){
                productExists = true
                return carrinhoItem.qntd++    
            }
        })
    
    if(!productExists){
      this.carrinhoList.push(item)
    }

}


deleteFromCarrinho(id:number){
    this.carrinhoList.splice(id,1)
    this.comunicator.deleteItem.next()

}
}
