import { Injectable } from '@angular/core';
import { Transaction} from '../model/transaction';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class TransactionService{

  baseUrl="http://localhost:8586/transactions";

   constructor(private http:HttpClient){

   }
    addTransaction(transaction:Transaction):Observable<Transaction>{
        let url=this.baseUrl+"/add";
        let observable:Observable<Transaction>=this.http.post<Transaction>(url,transaction);
        return observable;
        
    }
    getTransaction(accountId:number):Observable<Transaction>{
        let url=this.baseUrl+"/by/accountid/"+accountId;
        let observable:Observable<Transaction>=this.http.get<Transaction>(url);
        return observable;
    }
}