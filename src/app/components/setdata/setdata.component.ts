import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/common/item';
import { Itemsresp } from 'src/app/common/itemsresp';
import { Resp } from 'src/app/common/resp';
import { AdminsetdataService } from 'src/app/services/adminsetdata.service';

@Component({
  selector: 'app-setdata',
  templateUrl: './setdata.component.html',
  styleUrls: ['./setdata.component.css']
})
export class SetdataComponent implements OnInit {

   
   @Input() itemsList:Item[]  ;
   resp : Resp;
  

  constructor(private adminsetdataService:AdminsetdataService) { }

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

  updateItem(item){
    this.adminsetdataService.updateItem(item).subscribe(
      data => 
      {
        this.resp = data;
        if(this.resp.success == true){
          alert("Item Added/updated");
          //this.route.navigate(['']);
        }
        else{
          alert("Something went wrong . Please try again.");
        }
      }
    )
  }

  addRow(){
   
    this.itemsList.push({
      id:0 ,
     itemName:'' ,
     cuisine:'' ,
     description:'' ,
     price:0 ,
     enable:'' 
    });
  }

}
