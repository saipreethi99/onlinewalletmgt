import { Injectable } from '@angular/core';
import {Account} from '../model/account';
import {AccountStatus} from '../model/accountstatus';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class AccountService{
    baseUrl="http://localhost:8585/accounts";
    constructor(private http:HttpClient){
    }

addAccount(account:Account):Observable<Account>{
    let url=this.baseUrl+"/add";
    let observable:Observable<Account>=this.http.post<Account>(url,account);
    return observable;
}

findAccountById(accountId:number):Observable<Account>{
    let url =this.baseUrl+"/by/accountid/"+accountId;
    let observable:Observable<Account> =this.http.get<Account>(url);
    return observable;
}
}