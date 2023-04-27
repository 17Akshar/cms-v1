import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/home/home/home.component';
import { CartComponent } from './client/cart/cart/cart.component';
import { HistoryComponent } from './client/history/history/history.component';
import { BillsComponent } from './client/history/bills/bills.component';
import { TransactionComponent } from './client/history/transaction/transaction.component';
import { FeedbackComponent } from './client/feeback/feedback/feedback.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'history',component:HistoryComponent,children:[
    {path:'',component:BillsComponent},
    {path:'bill',component:BillsComponent},
    {path:'transaction',component:TransactionComponent},
  ]},
  {path:'feedback',component:FeedbackComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
