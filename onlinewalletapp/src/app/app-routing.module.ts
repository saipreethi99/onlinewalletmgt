import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { GetAccountComponent } from './get-account/get-account.component';

const routes: Routes = [
  {path:'add-account',component:AddAccountComponent},
  {path:'get-account',component:GetAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
