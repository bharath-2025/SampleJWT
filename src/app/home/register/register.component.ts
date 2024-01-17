import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/models/register-user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  //Properties
  registerForm: FormGroup;
  isFormSubmitted : boolean = false;

  constructor(private accountService : AccountService,private router : Router){
    this.registerForm = new FormGroup({
      PersonName: new FormControl(null,[Validators.required]),
      Email: new FormControl(null,[Validators.required,Validators.email]),
      Password: new FormControl(null,[Validators.required]),
      ConfirmPassword: new FormControl(null,[Validators.required]),
    });

  }

  get register_personNameControl(): any{
    return this.registerForm.controls["PersonName"];
  }

  get register_emailControl(): any{
    return this.registerForm.controls["Email"];
  }

  get register_passwordControl(): any{
    return this.registerForm.controls["Password"];
  }

  get register_confirmPasswordControl(): any{
    return this.registerForm.controls["ConfirmPassword"];
  }

  onRegisterSubmit(){
    this.isFormSubmitted = true;
    this.accountService.postRegister(this.registerForm.value).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.isFormSubmitted = false;

        //storing JWT token into Localstorage
        localStorage["token"] = response.token;
        
        //navigate or redirect to home page
        this.router.navigate(["/dashboard"]);
        //reset the registerForm
        this.registerForm.reset();
      },

      error:(error)=>{
        console.log(error);
      },

      complete:()=>{}
    });
  }

}
