import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { ViewComponent } from '../view/view.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  authService=inject(AuthService)
  ngOnInit():void{
    this.authService.user$.subscribe((user:any)=>{
      if(user){
        this.authService.currentUser.set({
          email:user.email!,
          username:user.displayName!,
        });
      }
      else{
        this.authService.currentUser.set(null)
      }
      console.log(this.authService.currentUser())
    })
    

  }
  constructor(private router: Router){

  }
  logOut():void{
    this.authService.logout()

    this.router.navigate(['Login'])
  }

}
