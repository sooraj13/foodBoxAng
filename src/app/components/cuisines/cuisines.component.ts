import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {


  public cuisinesList : any[]=['kitkat','nakshatra','elapas'];

  public itemsList : any[]=['chiken biriyani','chicken chilly','poratta'];

  public total : number = 600 ;

  constructor() { }

  ngOnInit(): void {
  }

}
