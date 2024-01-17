import { Component } from '@angular/core';
import { DashboardComponent } from '../home/dashboard/dashboard.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  constructor(private dashboardComponent : DashboardComponent){
    this.dashboardComponent.redirectToCoursesPage();
  }

}
