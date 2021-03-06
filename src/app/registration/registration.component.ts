import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder ,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  name = 'Angular 4';
  

  ngOnInit() {
  }

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ],
      email: ['', [Validators.required ,  Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile: ['', [Validators.required,Validators.pattern('^[0-9]{9,12}')]],
      gender: ['', Validators.required ],
      password: ['', Validators.required ],
      cpassword: ['', Validators.required ]
      
      
   });
 }

 onSubmit(angForm){
   alert(angForm.email);
  
 }


}
