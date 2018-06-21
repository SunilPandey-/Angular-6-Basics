import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/Http';

import { MyserviceService } from './myservice.service';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ProductComponent } from './product/product.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';

const appRoutes: Routes = [
  { path: 'new-cmp', component: NewCmpComponent }
 
   
];


@NgModule({
  declarations: [// put all your component / directives / pipes here
    AppComponent,
    NewCmpComponent,
    ProductComponent,
    ChangeTextDirective,
    SqrtPipe,

  ],
  imports: [ // put all your module here
    BrowserModule,
    //import HttpClientModule after BrowserModule
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    // put all you services here
    MyserviceService
  ],
  bootstrap: [// The main component to be bootstrapped in main.ts file. normally one only
    AppComponent]
})
export class AppModule { }
