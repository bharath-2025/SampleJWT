import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from '../course/course.component';


@NgModule({
  declarations: [AboutComponent,DashboardComponent,HeaderComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  exports:[
    AboutComponent,DashboardComponent,HeaderComponent
  ],
  providers:[]
})
export class HomeModule { }