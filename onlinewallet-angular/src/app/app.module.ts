import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionService } from './service/transactionservice';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './service/accountservice';
import { UpdateCreditComponent } from './update-credit/update-credit.component';
import { UpdateDebitComponent } from './update-debit/update-debit.component';
import { UpdateTransferComponent } from './update-transfer/update-transfer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AuthenticationService } from './service/authservice';
import { AuthInterceptor } from './auth.interceptor';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    UpdateCreditComponent,
    UpdateDebitComponent,
    UpdateTransferComponent,
    AddUserComponent,
    AuthenticateComponent,
    AppHomeComponent,
    TransactionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TransactionService,
    AccountService,
    HttpClient,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
