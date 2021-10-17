import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { CuisinesComponent } from './components/cuisines/cuisines.component';
import { AdminloginComponent} from './components/adminlogin/adminlogin.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { SetdataComponent } from './components/setdata/setdata.component';
import { CartComponent} from './components/cart/cart.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [{path: '' , redirectTo: 'login' , pathMatch: 'full'},
  {path:'login' , component: LoginComponent},
  {path:'register' , component: RegisterComponent},
  {path: 'forgotpassword' , component: ForgotpasswordComponent },
  {path: 'userlogin/cuisines/:id' , component: CuisinesComponent },
  {path: 'adminlogin' , component: AdminloginComponent },
  {path: 'userlogin' , component: UserloginComponent },
  {path: 'adminlogin/setdata' , component: SetdataComponent },
  {path: 'userlogin/cart/:id' , component:CartComponent},
  {path : 'userlogin/cart/summary/:id', component:SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
