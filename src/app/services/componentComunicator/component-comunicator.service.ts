import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentComunicatorService {

sendData = new Subject<Product>()
sendItems = new Subject()
deleteItem = new Subject()
  constructor() { }


  sentToCarrinho(item){
    this.sendData.next(item)
  }

  getProductInCarrinho(){
    return this.sendData.asObservable()
  }
}
