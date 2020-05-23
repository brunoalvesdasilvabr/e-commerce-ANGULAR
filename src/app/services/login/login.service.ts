import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import{ environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
apiKey = environment.api
  constructor(private http:HttpClient, private route:Router) { }

tryLoggedIn = new Subject()

cadastrar(email:string,password:string){
return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.apiKey,
    {
      email:email,
      password:password,
      returnSecureToken:true
    })

  }

  login(email:string, password:string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.apiKey,
    
      {
        email:email,
      password:password,
      returnSecureToken:true
      }
    ).pipe(map(res=>{
      if(res && res['idToken']){
        localStorage.setItem('token',res['idToken'])

      }
    }))
  }

  logout(){
    localStorage.removeItem('token')
    this.tryLoggedIn.next(true)
    this.route.navigate(['/login'])
  }


  isLoggedIn(){
    let token = localStorage.getItem('token')
    console.log(token)
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    console.log('expirationDate ',expirationDate)
    console.log('decodeToken ', decodedToken)
    console.log(!isExpired)
      return !isExpired
      
  }

  getCurrentUser(){
    let token = localStorage.getItem('token')
    if(!token){
      return
    }

    return new JwtHelperService().decodeToken(token);
  }

  onRefresh(){
    const logged = this.isLoggedIn()
    console.log('logged', logged)
    if(logged){
      this.tryLoggedIn.next(true)
      this.route.navigate(['/produtos'])
    }
  }
}