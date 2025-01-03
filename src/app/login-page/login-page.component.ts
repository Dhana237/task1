import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  UserName:any
  PassWord:any
  authService= inject(AuthService)
  fB= inject (FormBuilder)
loginPage= this.fB.nonNullable.group({
    username: ['',Validators.minLength(4)],
    password:['',Validators.minLength(5)]
  })
  get username(){
    return this.loginPage.get('username')
  }
  get password(){
    return this.loginPage.get('password')
  }


  constructor(private router: Router){
  }
  errorMessage:string | null= null
  getIn():void{
    const rawForm = this.loginPage.getRawValue()
    this.authService.login(rawForm.username,rawForm.password)
    .subscribe({
      next:()=>{
        this.router.navigateByUrl('/Home');
      },
      error:(err)=>{
        this.errorMessage= err.code
      }
    })
   
  }
  

}
