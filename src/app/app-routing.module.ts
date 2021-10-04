import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { CuisinesComponent } from './components/cuisines/cuisines.component';
import { AdminloginComponent} from './components/adminlogin/adminlogin.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { SetdataComponent } from './components/setdata/setdata.component';

const routes: Routes = [{path:'login' , component: LoginComponent},
  {path:'register' , component: RegisterComponent},
  {path: 'forgotpassword' , component: ForgotpasswordComponent },
  {path: 'userlogin/cuisines' , component: CuisinesComponent },
  {path: 'adminlogin' , component: AdminloginComponent },
  {path: 'userlogin' , component: UserloginComponent },
  {path: 'adminlogin/setdata' , component: SetdataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
