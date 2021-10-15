import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { Resp } from 'src/app/common/resp';
import { UserDetails } from 'src/app/common/user-details';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  @Input() userDetails = new UserDetails();

  resp: Resp = new Resp();

  constructor(private route:Router,private userDetailsService:UserDetailsService) { }

  ngOnInit(): void {
  }


  validateUser(userDetails){


    this.userDetailsService.validateUser(this.userDetails).subscribe(

      data =>{
        this.resp = data;
        if(this.resp.success == true){
          this.route.navigate(['/adminlogin/setdata']);
        }
        else{
          alert("Invalid User Name or Password");
          this.route.navigate(['/login']);
        }
        

      }
      
    );
    

  }

}
