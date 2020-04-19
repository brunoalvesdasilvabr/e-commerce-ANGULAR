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
  imagePath:'https://cea.vteximg.com.br/arquivos/ids/10282201-468-560/Calca-Jeans-Masculina-Slim-com-Puidos-Azul-Escuro-8655433-Azul_Escuro_1.jpg?v=636964769869370000',
  category:'roupas',
  gender:'masculino'

}]
  constructor() { }
}
