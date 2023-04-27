import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddItemsComponent } from '../add-items/add-items.component';
import { ShowUserComponent } from '../show-user/show-user.component';

const routes: Routes = [
    {path:'add-items',component:AddItemsComponent},
    {path:'show-user',component:ShowUserComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
