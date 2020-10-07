import { Injectable } from '@angular/core';
import {Account} from '../model/account';
import {Credit }from '../model/credit';
import {Debit} from '../model/debit';
import {Transfer} from '../model/transfer';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class AccountService{
    baseUrl="http://localhost:8590/user/accounts";
    constructor(private http:HttpClient){
    }

addAccount(user:User):Observable<Account>{
    let registerUrl="http://localhost:8590/register";
    let observable:Observable<Account>=this.http.post<Account>(registerUrl,user);
    return observable;
}

getAccount():Observable<Account>{
    let accountId=this.getAccountId();
    let url =this.baseUrl+"/by/accountid/"+accountId;
    let observable:Observable<Account> =this.http.get<Account>(url);
    return observable;
}

updateCredit(credit:Credit):Observable<Account>{
    let accountId=this.getAccountId();
    let url =this.baseUrl+"/credit";
    credit.accountId=accountId;
    let observable:Observable<Account> =this.http.put<Account>(url,credit);
    return observable;
}

updateDebit(debit:Debit):Observable<Account>{
    let accountId=this.getAccountId();
    debit.accountId=accountId;
    let url =this.baseUrl+"/debit";
    let observable:Observable<Account> =this.http.put<Account>(url,debit);
    return observable;
}

updateTransfer(transfer:Transfer):Observable<Account>{
    let url =this.baseUrl+"/transfer";
    let accountId=this.getAccountId();
    transfer.debitedAccountId=accountId;
    let observable:Observable<Account> =this.http.put<Account>(url,transfer);
    return observable;
}

getAccountId():number{
   let idText= localStorage.getItem("accountId");
   let id=Number(idText);
   return id;
}

}
