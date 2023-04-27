import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/home/home/home.component';
<<<<<<< HEAD

const routes: Routes = [
  {path:'home',component:HomeComponent}
=======
import { CartComponent } from './client/cart/cart/cart.component';
import { HistoryComponent } from './client/history/history/history.component';
import { BillsComponent } from './client/history/bills/bills.component';
import { TransactionComponent } from './client/history/transaction/transaction.component';
import { FeedbackComponent } from './client/feeback/feedback/feedback.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddItemsComponent } from './dashboard/add-items/add-items.component';
import { ShowUserComponent } from './dashboard/show-user/show-user.component';

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

  {path:'admin',component:DashboardComponent},

>>>>>>> 8c2942a42af7f75292d1a2184a9031b75169b554
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
