import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { AuthguardService } from './authguard.service';

export const routes: Routes = [
    {path:'',redirectTo:'Login',pathMatch:'full'},
    {path:'Home',component:NavbarComponent,
        children:[
            {path:'Add', component:AddComponent},
            {path:'View', component:ViewComponent},
        ],
        canActivate:[AuthguardService]
         },
{path:'Login',component:LoginPageComponent},
{path:'Signup',component:SignupComponent}
];
