import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resp } from 'src/app/common/resp';
import { UserDetails } from 'src/app/common/user-details';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  @Input() userDetails = new UserDetails();
  resp: Resp = new Resp();
  constructor(private userDetailsService:UserDetailsService,private route:Router) { }

  ngOnInit(): void {
  }

  updatePassword(userDetails){

    this.userDetailsService.updatePassword(this.userDetails).subscribe(
      data => {
        this.resp = data;
        if(this.resp.success){
          alert("Password Updated Successfully");
          this.route.navigate(['/login']);
        }
        else{
          alert("Invalid Details");
        }
      }


    );

  }

}
