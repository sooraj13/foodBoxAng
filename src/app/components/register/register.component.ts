import { Component, OnInit,Input } from '@angular/core';
import { UserDetails} from 'src/app/common/user-details';
import { Resp } from 'src/app/common/resp';
import { UserDetailsService } from 'src/app/services/user-details.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() userDetails = new UserDetails();
  resp : Resp = new Resp();

  constructor(private route:Router,private userDetailsService:UserDetailsService) { }

  ngOnInit(): void {
  }

  registerUser(userDetails){

    this.userDetailsService.registerUser(this.userDetails).subscribe(
      data => 
      {
        this.resp = data;
        if(this.resp.success == true){
          this.route.navigate(['/userlogin/cuisines']);
        }
        else{
          this.route.navigate(['/login']);
        }
      }
    )

  }

}
