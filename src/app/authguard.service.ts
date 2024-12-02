import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map, Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  constructor(private authService: AuthService,private router:Router) { }
  canActivate():Observable<boolean>{
    return this.authService.user$.pipe(
      map((user)=>{
        if(user){
          return true;
        }
        else{
          this.router.navigateByUrl('/Login');
          return false;
        }
      })
    )
  }
}
