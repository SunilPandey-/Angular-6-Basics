import { Component } from '@angular/core';
//import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from './myservice.service';

//import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//@Injectable()

export class AppComponent {
  title = 'Angular 5 Tutorial ';
  todaydate;
  message;
  months = ["January","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  color: string;

  constructor(private http: HttpClient,private myservice: MyserviceService) { }
  httpdata;
  

   ngOnInit() {
     this.http.get("assets/input.json")
     
     .subscribe(
       data => {this.displaydata(data);
       }
    
     );
      this.todaydate = this.myservice.showTodayDate();
     
     
   }
displaydata(data) {this.httpdata = data;} // check it
showdate() {
  //this.todaydate = this.myservice.showTodayDate();
  this.message = this.myservice.showTodayDate();
}

  myFunction(event){
    console.log("Button is clicked :"+event);
  }
  changeMonths(event,months){
    console.log(" Month changed from Drop down: "+event+" "+months);
  }
  
}
  