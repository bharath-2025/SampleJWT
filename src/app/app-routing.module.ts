import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { CourseComponent } from './course/course.component';
import { LogoutComponent } from './home/logout/logout.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"courses",component:CourseComponent},
  {path:"logout",component:LogoutComponent},
  {path:"", redirectTo:"dashboard",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
