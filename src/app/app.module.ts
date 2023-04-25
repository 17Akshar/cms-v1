import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login/login.component';
import { HomeComponent } from './client/home/home/home.component';
import { CartComponent } from './client/cart/cart/cart.component';
import { BillsComponent } from './client/history/bills/bills.component';
import { TransactionComponent } from './client/history/transaction/transaction.component';
import { FeedbackComponent } from './client/feeback/feedback/feedback.component';
import { PopUpComponent } from './client/pop-up/pop-up.component';
import { NavComponent } from './client/navbar/nav/nav.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    BillsComponent,
    TransactionComponent,
    FeedbackComponent,
    PopUpComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
