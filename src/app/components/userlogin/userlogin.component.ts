import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'; 
import { Resp } from 'src/app/common/resp';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { UserDetails} from 'src/app/common/user-details';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  resp : Resp = new Resp();
 // userD : UserDetails = new UserDetails();

  @Input() userDetails = new UserDetails();
  

  constructor(private route:Router,private userDetailsService:UserDetailsService) { }

  ngOnInit(): void {
    //this.userDetails.email = 'sooraj@gmail.com';
    //this.userDetails.password = 'admin2';
    
  }


  validateUser(userDetails){

    this.userDetailsService.validateUser(this.userDetails).subscribe(
      data => 
      {
        this.resp = data;
        if(this.resp.success == true){
          this.route.navigate(['/userlogin/cuisines']);
        }
        else{
          alert("Invalid User Name or Password");
          this.route.navigate(['/login']);
        }
      }
    )

  }

  /*validateUser(){

    this.userDetailsService.sendGetRequest().subscribe(
      data => 
      { 
     
        this.resp = data;
       
        if(this.resp.success == true){
          this.route.navigate(['/userlogin/cuisines']);
        }
        else{
          this.route.navigate(['/login']);
        }
      })

  }*/
    


}
