import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private login:LoginService, private route:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    
    const logged = this.login.isLoggedIn()
    if(logged){
      this.login.tryLoggedIn.next(true)
      return true
    }else{
      this.route.navigate(['/login'], {queryParams:{returnUrl:state.url}})
      this.login.tryLoggedIn.next(true)
      return false
  }
}
}
