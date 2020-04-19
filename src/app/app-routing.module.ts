import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CarrinhoComponent } from './products/carrinho/carrinho.component';



const routes: Routes = [
  {path:'',redirectTo:'produtos', pathMatch:'full'},
  {path:'produtos' ,component: ProductsComponent},
  {path:'produtos/:id', component:ProductDetailsComponent},
  {path:'carrinho', component:CarrinhoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
