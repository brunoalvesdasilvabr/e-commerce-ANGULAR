import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { GlobalHeaderComponent } from './components/header/global-header/global-header.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CarrinhoItemComponent } from './components/carrinho/carrinho-item/carrinho-item/carrinho-item.component';
import { LoginComponent } from './components/login/login.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    GlobalHeaderComponent,
    ProductDetailsComponent,
    CarrinhoComponent,
    CarrinhoItemComponent,
    LoginComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
