import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FoodboxComponent } from './components/foodbox/foodbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { CuisinesComponent } from './components/cuisines/cuisines.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { SetdataComponent } from './components/setdata/setdata.component';
import { HttpClientModule} from '@angular/common/http';
import { UserDetailsService } from './services/user-details.service';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { SummaryComponent } from './components/summary/summary.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FoodboxComponent,
    ForgotpasswordComponent,
    CuisinesComponent,
    AdminloginComponent,
    UserloginComponent,
    SetdataComponent,
    CartComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
