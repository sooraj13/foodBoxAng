import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  validateUser(){

    this.route.navigate(['/userlogin/cuisines']);


  }

}
