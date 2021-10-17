import { Component, OnInit , Input} from '@angular/core';
import { Item } from 'src/app/common/item';
import { Resp } from 'src/app/common/resp';
import { Router } from '@angular/router';
import {  OrderService} from 'src/app/services/order.service';
import { CartItem } from 'src/app/common/cart-item';
import { OrderDetl } from 'src/app/common/order-detl';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartList:CartItem[]  ;
  resp : Resp;
  orderDetl:OrderDetl = new OrderDetl();
  @Input() total:number = 0;

  constructor(private route:Router,private orderService:OrderService) { }

  ngOnInit(): void {

    this.getItems();

  }

  getItems(){
    this.orderDetl.email = this.route.url.split('/')[((this.route.url.split('/')).length ) - 1];
    this.orderService.getItems(this.orderDetl).subscribe(
      data => {
        this.cartList = data;
        for(var counter:number = 0; counter<data.length; counter++){
          this.total = this.total + (data[counter].price * data[counter].qty);
      }

      }
    );

  }

  placeOrder(){

    this.orderService.placeOrder(this.orderDetl).subscribe(
     data => {
       if(data.success == true){
        this.route.navigate(['userlogin/cart/summary/' + this.route.url.split('/')[((this.route.url.split('/')).length ) - 1]]);
       }
       else{
         alert("Something Went Wrong Please Try Again");
       }
     }
   );
    
  }

  goBack(){
    this.route.navigate(['userlogin/cuisines/' + this.route.url.split('/')[((this.route.url.split('/')).length ) - 1]]);
  }


}
