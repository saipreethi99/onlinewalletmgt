import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { TransactionService } from './service/transactionservice';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetTransactionComponent } from './get-transaction/get-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTransactionComponent,
    GetTransactionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TransactionService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
