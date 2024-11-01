import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  UserName:any
  PassWord:any
  loginPage=new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  get username(){
    return this.loginPage.get('username')
  }
  get password(){
    return this.loginPage.get('password')
  }


  constructor(private router: Router){
  }
  getIn(){
    if(this.UserName=='dhanalashmi'&& this.PassWord=='tasklogin'){
      
      

      this.router.navigate(['Home'])
    }
    else{
      alert('invalid input')
    }
  }
  ngOnInit():void{}

}
