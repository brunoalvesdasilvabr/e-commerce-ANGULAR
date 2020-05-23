import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:boolean = true
error:boolean = false
errorMessage:string =''
  constructor(private loginService:LoginService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginService.onRefresh()
  }

  onSubmit(form:NgForm){
    if(!this.login){
      console.log(form.value)
      this.loginService.cadastrar(form.value.email,form.value.senha).subscribe((res)=>{
        console.log(res)
      },error =>{
        this.error = true
        this.errorMessage = error.error.error.message
        console.log(error)
      })
      form.reset()
    }else{
        this.loginService.login(form.value.email,form.value.senha).subscribe((res)=>{
          console.log(res)
          this.loginService.tryLoggedIn.next(true)
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
          console.log('url retornada: ',returnUrl)
          this.router.navigate([returnUrl || '/produtos'])

        },error =>{
          this.router.navigate(['/login'])
          this.error = true
          setTimeout(()=>{this.error = false},10000)
          this.errorMessage = error.error.error.message
          console.log(error)
        })
    }
  }
  onSwitch(){
    this.login = !this.login
  }



}
