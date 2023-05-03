import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './client/login/login/login.component';
import { HomeComponent } from './client/home/home/home.component';
import { MainPageComponent } from './client/main-page/main-page.component';
import { CartComponent } from './client/cart/cart/cart.component';
import { HistoryComponent } from './client/history/history/history.component';
import { BillsComponent } from './client/history/bills/bills.component';
import { TransactionComponent } from './client/history/transaction/transaction.component';
import { FeedbackComponent } from './client/feeback/feedback/feedback.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddItemsComponent } from './dashboard/add-items/add-items.component';
import { ShowUserComponent } from './dashboard/show-user/show-user.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'main-page',component:MainPageComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'history',component:HistoryComponent,children:[
      {path:'bills',component:BillsComponent},
      {path:'transaction',component:TransactionComponent}
    ]},
    {path:'feedback',component:FeedbackComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'add-items',component:AddItemsComponent},
    {path:'show-user',component:ShowUserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
