import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup;
  isLoginFormSubmitted : boolean = false;

  constructor(private accountService:AccountService, private router:Router){
    this.loginForm = new FormGroup({
      Email : new FormControl(null,[Validators.required,Validators.email]),
      Password : new FormControl(null,Validators.required)
    })
  }


  get login_emailControl(){
    return this.loginForm.controls["Email"];
  }

  get login_passwordControl(){
    return this.loginForm.controls["Password"];
  }

  onLoginSubmit(){
    this.isLoginFormSubmitted = true;

    this.accountService.postLogin(this.loginForm.value).subscribe({
      next : (response:any)=>{
        this.isLoginFormSubmitted = false;
        this.accountService.currentUserName = response.email;
        console.log(response);

        //Storing the JWT token into LocalStorage
        localStorage["token"] = response.token

        this.router.navigate(["/dashboard"]);
        this.loginForm.reset();
      },

      error: (error)=>{
        console.log(error);
      }
    });
  }

}
