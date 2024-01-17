import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  //Constructor
  constructor(private router:Router, private accountService : AccountService){}


  redirectToCoursesPage(){
      //ToDo: 
      //Send a get request to the server to fetch the course
      //Modify the component to make the necessary changes in the view
      //For Demo Iam redirecting to Courses component.

      this.accountService.getCourses().subscribe({
        next : (response)=>{
          console.log(response);
          return this.router.navigate(["courses"])
        },
        error :(error)=>{
          console.log(error);
          return this.router.navigate([""]);
        },
        complete : ()=>{
        }
      });
  }
}
