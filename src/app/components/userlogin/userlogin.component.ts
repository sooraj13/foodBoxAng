import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { Resp } from 'src/app/common/resp';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  resp : Resp = new Resp();

  constructor(private route:Router,private userDetailsService:UserDetailsService) { }

  ngOnInit(): void {
  }

  validateUser(){

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

    

  }

}
