import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }
  logout(){
    this._authService.logout();
  
  }
}
