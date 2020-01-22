import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  providers: [NgbDropdownConfig]
})
export class SidenavComponent implements OnInit {

  list = [];

  constructor(config: NgbDropdownConfig,private _authService: AuthService) { config.placement = 'top-left';
  config.autoClose = false;
  const user = this._authService.decode();
  if (user.role == 'Admin')
  
  {
    this.list = [
      {
        name: 'Home',
        url: 'home',
        writeble: true,
        icon: 'icon-speedometer'
      },
      {
        name: 'Admin',
        url: 'admin',
        writeble: true,
        icon: 'icon-puzzle',
      }
    ]


  }
  else
  {
    this.list = [
      {
        name: 'Home',
        url: 'home',
        writeble: true,
        icon: 'icon-speedometer'
      }
    ]
  }
}

 

  ngOnInit() {
  }
 
  
}
