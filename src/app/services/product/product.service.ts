import { Injectable } from '@angular/core';
 import { Product } from 'src/app/models/product/product.model'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[] = [{
  id:0,
  name:'Camiseta preta',
  valor:23.90,
  imagePath:'https://static.zattini.com.br/produtos/camiseta-basica-masculina/06/FTL-0002-006/FTL-0002-006_zoom1.jpg?ts=1586860590&ims=544x',
  category:'roupas',
  gender:'masculino',
  tamanhos:[
    'G',
    'GG',
    'M',
    'P'
  ],
  qntd:1
},{
  id:1,
  name:'Calça Jeans',
  valor:78.90,
  imagePath:'https://a-static.mlcdn.com.br/618x463/calca-jeans-masculina-skinny-roupas-masculina-c-lycra-nacional/uniqstore/00001059e/12973feba171ceffe81259261a86a0b4.jpg',
  category:'roupas',
  gender:'masculino',
  tamanhos:[
    'G',
    'GG',
    'M',
    'P'
  ],
  qntd:1

},
{
  id:2,
  name:'Jaqueta de couro',
  valor:78.90,
  imagePath:'https://cdn.awsli.com.br/800x800/4/4061/produto/18847911/e8476d14c1.jpg',
  category:'roupas',
  gender:'masculino',
  tamanhos:[
    'G',
    'GG',
    'M',
    'P'
  ],
  qntd:1

}]

carrinhoTriguer = new Subject<Product[]>()
  constructor() { }

  getItem(index:number){
   return this.products[index]
  }
}


