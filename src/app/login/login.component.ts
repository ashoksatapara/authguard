import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder ,FormControl,Validators} from '@angular/forms'
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  name = 'Angular 4';
  

  ngOnInit() {
  }

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private _authService: AuthService) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
     
      email: ['', [Validators.required ,  Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    
      password: ['', Validators.required ]
    
      
      
   });
 }
 onSubmit(angForm){
  alert(angForm.email);
 this.login();
}

 login(){
  this._authService.login();
 }

 loginAdmin(){
   this._authService.loginAdmin();
   
 }



}
