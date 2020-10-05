import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { AccountStatus } from '../model/accountstatus';
import { AccountService } from '../service/accountservice';

@Component({
  selector: 'app-get-account',
  templateUrl: './get-account.component.html',
  styleUrls: ['./get-account.component.css']
})
export class GetAccountComponent {

  constructor(private route:ActivatedRoute,private service:AccountService) { 
    let observable=route.paramMap;
    observable.subscribe((params:ParamMap)=>{
    let codeVal:string=params.get("accountId");
    let id:number=Number(codeVal);
    console.log("accountId is "+id);
  })
}

account:Account;

getAccountById(accountId:number){
  let  observable:Observable<Account>=this.service.findAccountById(accountId);
  observable.subscribe(accountArg=>{this.account=accountArg});
}

findAccount(form:any){
  let data=form.value;
  let accountId=data.accountId;
  this.getAccountById(accountId);
}

}
