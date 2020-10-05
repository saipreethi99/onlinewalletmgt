import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { GetTransactionComponent } from './get-transaction/get-transaction.component';
const routes: Routes = [
  {path:'add-transaction', component:AddTransactionComponent},
  
  {path:'get-transaction', component:GetTransactionComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
