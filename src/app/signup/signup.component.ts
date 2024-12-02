import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  UserName:any
  Email:any
  PassWord:any
  authService= inject(AuthService)
  fB= inject (FormBuilder)
signinPage= this.fB.nonNullable.group({
    username: ['',Validators.minLength(4)],
    email: ['',Validators.minLength(5)],
    password:['',Validators.minLength(6)]
  })
  get username(){
    return this.signinPage.get('username')
  }
  get email(){
    return this.signinPage.get('email')
  }
  get password(){
    return this.signinPage.get('password')
  }


  constructor(private router: Router){
  }
  errorMessage:string | null= null
  getIn():void{
    const rawForm = this.signinPage.getRawValue()
    this.authService.singnup(rawForm.email,rawForm.username,rawForm.password)
    .subscribe(()=>{
     this.router.navigateByUrl('/Home');
      })
   
  }
  

}
