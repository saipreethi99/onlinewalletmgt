import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  UpdateCreditComponent } from './update-credit/update-credit.component';
import { UpdateDebitComponent } from './update-debit/update-debit.component';
import { UpdateTransferComponent } from './update-transfer/update-transfer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

const routes: Routes = [
  {
    path:"app-home",
    component:AppHomeComponent
  },
  {
    path:'',
    redirectTo :'app-home',
    pathMatch:'full'
  },

  {path:'account-details', component:AccountDetailsComponent},

  {path:'transactions', component:TransactionsListComponent},

  {path:'credit', component:UpdateCreditComponent},

  {path:'debit', component:UpdateDebitComponent},

  {path:'transfer', component:UpdateTransferComponent},

  {path:'register', component:AddUserComponent},

  {path:'login', component:AuthenticateComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
