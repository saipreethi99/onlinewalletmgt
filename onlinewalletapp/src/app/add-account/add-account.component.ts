import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account} from '../model/account'
import { AccountStatus} from '../model/accountstatus'
import { AccountService} from '../service/accountservice'

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {

  constructor(private service:AccountService) { }

  account:Account;

  addAccount(form:any){
    let data=form.value;
    let accountId=data.accountId;
    let accountBalance=data.accountBalance;
    let status=data.status;
    let userId=data.userId;
    this.account=new Account(accountId,accountBalance,status,userId);
    let observable:Observable<Account>=this.service.addAccount(this.account);
    observable.subscribe(accountArg=>{
      this.account=accountArg;
    }
    );
}
}