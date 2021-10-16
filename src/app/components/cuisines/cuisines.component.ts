import { Component, OnInit , Input} from '@angular/core';
import { Item } from 'src/app/common/item';
import { Resp } from 'src/app/common/resp';
import { AdminsetdataService } from 'src/app/services/adminsetdata.service';
import {  OrderService} from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { OrderDetl } from 'src/app/common/order-detl';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {


  @Input() itemsList:Item[]  ;
  resp : Resp;
  orderDetl:OrderDetl = new OrderDetl();


  constructor(private adminsetdataService:AdminsetdataService,private route:Router,private orderService:OrderService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.adminsetdataService.getItems().subscribe(
      data => {
        this.itemsList = data.itemsList;
      }
    );

  }

  addToCart(item:any){
    //alert(item.id);
    //alert("Item added to cart:" + this.route.url.split('/')[((this.route.url.split('/')).length ) - 1]);
    this.orderDetl.itemId = item.id;
    this.orderDetl.email = this.route.url.split('/')[((this.route.url.split('/')).length ) - 1] ; 
    this.orderDetl.status = "In Cart" ;

    this.orderService.addToCart(this.orderDetl).subscribe(
      data => {
        this.resp = data;
        if(this.resp.success){
          alert("Item Added Successfully");
        }
        else{
          alert("Something Went Wrong Please Try Again...")
        }
      }
    );

  }

  goToCart(){
    this.route.navigate(['userlogin/cart/' + this.route.url.split('/')[((this.route.url.split('/')).length ) - 1]  ]);
  }

}
