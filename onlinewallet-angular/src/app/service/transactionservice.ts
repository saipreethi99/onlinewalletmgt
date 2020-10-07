import { Injectable } from '@angular/core';
import { Transaction} from '../model/transaction';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthenticationService } from './authservice';
import { AccountService } from './accountservice';

@Injectable()
export class TransactionService{

  baseUrl="http://localhost:8590/user/transactions";

   constructor(private http:HttpClient ,private accountService:AccountService){

   }
    
    getTransactions():Observable<Transaction[]>{
        let accountId=this.accountService.getAccountId();
        let url=this.baseUrl+"/by/accountid/"+accountId;
        let observable:Observable<Transaction[]>=this.http.get<Transaction[]>(url);
        return observable;
    }
}