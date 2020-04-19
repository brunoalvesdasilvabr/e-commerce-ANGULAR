import { Injectable } from '@angular/core';
// import { Product } from '../../products/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products = [{
  name:'Camiseta preta',
  valor:'23.90',
  imagePath:'https://static.zattini.com.br/produtos/camiseta-basica-masculina/06/FTL-0002-006/FTL-0002-006_zoom1.jpg?ts=1586860590&ims=544x',
  category:'roupas',
  gender:'masculino'
},{
  name:'Calça Jeans',
  valor:'78.90',
  imagePath:'https://a-static.mlcdn.com.br/618x463/calca-jeans-masculina-skinny-roupas-masculina-c-lycra-nacional/uniqstore/00001059e/12973feba171ceffe81259261a86a0b4.jpg',
  category:'roupas',
  gender:'masculino'

},
{
  name:'Camiseta preta',
  valor:'23.90',
  imagePath:'https://static.zattini.com.br/produtos/camiseta-basica-masculina/06/FTL-0002-006/FTL-0002-006_zoom1.jpg?ts=1586860590&ims=544x',
  category:'roupas',
  gender:'masculino'
},{
  name:'Calça Jeans',
  valor:'78.90',
  imagePath:'https://a-static.mlcdn.com.br/618x463/calca-jeans-masculina-skinny-roupas-masculina-c-lycra-nacional/uniqstore/00001059e/12973feba171ceffe81259261a86a0b4.jpg',
  category:'roupas',
  gender:'masculino'

},
{
  name:'Camiseta preta',
  valor:'23.90',
  imagePath:'https://static.zattini.com.br/produtos/camiseta-basica-masculina/06/FTL-0002-006/FTL-0002-006_zoom1.jpg?ts=1586860590&ims=544x',
  category:'roupas',
  gender:'masculino'
},{
  name:'Calça Jeans',
  valor:'78.90',
  imagePath:'https://a-static.mlcdn.com.br/618x463/calca-jeans-masculina-skinny-roupas-masculina-c-lycra-nacional/uniqstore/00001059e/12973feba171ceffe81259261a86a0b4.jpg',
  category:'roupas',
  gender:'masculino'

},
{
  name:'Camiseta preta',
  valor:'23.90',
  imagePath:'https://static.zattini.com.br/produtos/camiseta-basica-masculina/06/FTL-0002-006/FTL-0002-006_zoom1.jpg?ts=1586860590&ims=544x',
  category:'roupas',
  gender:'masculino'
},{
  name:'Calça Jeans',
  valor:'78.90',
  imagePath:'https://a-static.mlcdn.com.br/618x463/calca-jeans-masculina-skinny-roupas-masculina-c-lycra-nacional/uniqstore/00001059e/12973feba171ceffe81259261a86a0b4.jpg',
  category:'roupas',
  gender:'masculino'

}]
  constructor() { }

  getItem(index:number){
   return this.products[index]
  }
}


