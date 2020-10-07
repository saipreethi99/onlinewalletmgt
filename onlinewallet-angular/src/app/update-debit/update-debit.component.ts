import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { Debit } from '../model/debit';
import { AccountService } from '../service/accountservice';
import { AuthenticationService } from '../service/authservice';

@Component({
  selector: 'app-update-debit',
  templateUrl: './update-debit.component.html',
  styleUrls: ['./update-debit.component.css']
})
export class UpdateDebitComponent  implements OnInit{

  constructor(private service:AccountService, private authService:AuthenticationService,private router:Router) { }
  account: Account;
  debit:Debit;

  ngOnInit(): void {
  
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
    }
  }
  
  updateDebit(form:any){
    let data=form.value;
    let accountId=data.accountId;
    let amount=data.amount;
    this.debit=new Debit(accountId,amount);
    let observable:Observable<Account>=this.service.updateDebit(this.debit);
    observable.subscribe(
      (account:Account)=>this.account=account,
      err=>{
        console.log("err in update debit component "+err.error);
      }
    
    );
  }
}




  