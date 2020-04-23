import {
  Component,
  OnInit
} from '@angular/core';
import {
  ComponentComunicatorService
} from 'src/app/services/componentComunicator/component-comunicator.service';
import {
  CarrinhoService
} from 'src/app/services/carrinho/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinhoList = []
  valorTotal: number
  constructor(private comunicator: ComponentComunicatorService, private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinhoList = this.carrinhoService.carrinhoList
    this.valorTotal = this.calculaTotal(this.carrinhoList)
    this.comunicator.deleteItem.subscribe(() => {
      this.carrinhoList = this.carrinhoService.carrinhoList
      this.valorTotal = this.calculaTotal(this.carrinhoList)

    })


  }
  calculaTotal(carrinhoArray) {
    let total = 0;
    carrinhoArray.forEach(item => {
      console.log('calcula total')

      total += item.valor * item.qntd
      console.log(item.valor * item.qntd)
    });
    return total
  }

}
