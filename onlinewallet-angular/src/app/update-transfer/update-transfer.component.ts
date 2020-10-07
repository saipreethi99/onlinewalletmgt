import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import {Transfer} from '../model/transfer';

import {AccountService} from '../service/accountservice';
import { AuthenticationService } from '../service/authservice';
@Component({
  selector: 'app-update-transfer',
  templateUrl: './update-transfer.component.html',
  styleUrls: ['./update-transfer.component.css']
})
export class UpdateTransferComponent implements OnInit{
  constructor(private service:AccountService, private authService:AuthenticationService, private router:Router) { }
  account:Account;
  transfer:Transfer;


  ngOnInit(): void {
  
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
    }
  }

  updateTransfer(form:any){
    let data=form.value;
    let creditedAccountId=data.creditedAccountId;
    let debitedAccountId=data.debitedAccountId
    let amount=data.amount;
    this.transfer=new Transfer(creditedAccountId,debitedAccountId,amount);
    let observable:Observable<Account>=this.service.updateTransfer(this.transfer);
    observable.subscribe(
      (account:Account)=>this.account=account,
      err=>{
        console.log("err in transfer component "+err.error);
      }      
      );
  }
}
