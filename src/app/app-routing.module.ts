import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';




const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'produtos' ,component: ProductsComponent, canActivate:[AuthGuard]},
  {path:'produtos/:id', component:ProductDetailsComponent, canActivate:[AuthGuard]},
  {path:'carrinho', component:CarrinhoComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
