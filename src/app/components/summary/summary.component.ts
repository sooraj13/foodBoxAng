import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  goBack(){
    this.route.navigate(['/userlogin/cuisines/' + this.route.url.split('/')[((this.route.url.split('/')).length ) - 1]  ]);
  }

}
