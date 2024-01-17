import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //This method is used to initialize the properties and executes automatically at the component startup
  NavItems: any[] = [];
  IsNavbarOpen: boolean = false;

  constructor(public accountService : AccountService){
  }

  ngOnInit() {
     this.NavItems = [
      {"name":"Home", "url":"dashboard"},
      {"name":"About", "url":"about"},
      {"name":"Policy", "url":"policy"},
      {"name":"FAQ", "url":"faq"},
     ]
  }

  toggleMenuBar($event:any){
    this.IsNavbarOpen = !this.IsNavbarOpen;
  }

  
}
