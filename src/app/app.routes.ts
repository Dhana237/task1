import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthguardService } from './authguard.service';

export const routes: Routes = [
    {path:'',redirectTo:'Login',pathMatch:'full'},
    {path:'Home',component:NavbarComponent,
        children:[
            {path:'Add',loadComponent:()=>import('./add/add.component').then(m=>m.AddComponent)},
            {path:'View', loadComponent:()=>import('./view/view.component').then(m=>m.ViewComponent)},
        ],
        canActivate:[AuthguardService]
         },
{path:'Login',loadComponent:()=>import('./login-page/login-page.component').then(m=>m.LoginPageComponent)},
{path:'Signup',loadComponent:()=>import('./signup/signup.component').then(m=>m.SignupComponent)},
];
