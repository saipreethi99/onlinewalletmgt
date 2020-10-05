import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountService } from './service/accountservice';
import { GetAccountComponent } from './get-account/get-account.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    GetAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AccountService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
