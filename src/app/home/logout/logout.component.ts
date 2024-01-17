import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private accountService:AccountService,private router:Router){

  }

  OnLogoutClick(){
    this.accountService.getLogout().subscribe({
      next: (response)=>{
        this.accountService.currentUserName = null;
        localStorage.removeItem("token");
        this.router.navigate(['/dashboard']);
      },

      error: (error)=>{
        console.log(error);
      },

      complete:()=>{}
    });
  }
}
