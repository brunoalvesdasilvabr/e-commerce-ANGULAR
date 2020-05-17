import { Injectable } from '@angular/core';
 import { Product } from 'src/app/models/product/product.model'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[] = []

carrinhoTriguer = new Subject<Product[]>()
  constructor(private http:HttpClient) { }

  getItem(index:number){
   return this.products[index]
  }

  getProdutcts(){
   return  this.http.get<Product[]>('https://e-commerce-angular-6ed58.firebaseio.com/produtos.json')
  }

  // putProducts(){
  //  return this.http.put('https://e-commerce-angular-6ed58.firebaseio.com/produtos.json',this.products)
  // }
}


