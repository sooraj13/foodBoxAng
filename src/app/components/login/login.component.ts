import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public userName: string = '';
  public password: string = '';

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  testForm : FormGroup = new FormGroup({
    userName : new FormControl('',
    [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    password : new FormControl('',
    [Validators.required, Validators.pattern('[a-zA-Z0-9]*')])
  });

  get f(){
    return this.testForm.controls;
  }



  validateUser(){

    this.route.navigate(['/cuisines']);


  }

}
