import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

    title = "USB Stick 8 GB";
    itemCount = 0;
    content = "No Item Added in Shopping List "

    addItem(){
      this.itemCount ++;
      this.content = " Item added in shopping  List";
  }
  removeItem(){
      if(this.itemCount > 0)
      this.itemCount --;

      if(this.itemCount == 0)
      this.content = "No Item Added in Shopping List "
  }
}
