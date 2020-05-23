import { Component, OnInit } from '@angular/core';
import { ComponentComunicatorService } from 'src/app/services/componentComunicator/component-comunicator.service';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {
carrinhoList = []
  constructor(private comunicator:ComponentComunicatorService,private carrinhoService:CarrinhoService, private login:LoginService) { }
isLoggedIn:boolean;
currentUser
  ngOnInit(){
    this.login.tryLoggedIn.subscribe(()=>{
      this.isLoggedIn = this.login.isLoggedIn()
     this.currentUser =  this.login.getCurrentUser()
    })

    this.comunicator.getProductInCarrinho().subscribe((item)=>{
      console.log('voltou aqui')
      this.carrinhoList = this.carrinhoService.carrinhoList
      this.carrinhoService.addToCarrinho(item)     
  })
  this.comunicator.deleteItem.subscribe(() => {
    console.log('global header')
    this.carrinhoList = this.carrinhoService.carrinhoList
    console.log(this.carrinhoList.length)

  })

  }

  signout(){
    this.login.logout()
    
  }

  

}
