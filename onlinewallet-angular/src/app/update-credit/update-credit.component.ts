import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../model/credit';
import { Account } from '../model/account';
import { AccountService } from '../service/accountservice';
import { AuthenticationService } from '../service/authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-credit',
  templateUrl: './update-credit.component.html',
  styleUrls: ['./update-credit.component.css']
})
export class UpdateCreditComponent implements OnInit{
  constructor(private service:AccountService,private authService:AuthenticationService, private router:Router) { }
  
  account:Account;
  credit:Credit;

  
  ngOnInit(): void {
  
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
    }
  }
  updateCredit(form:any){
    let data=form.value;
    let accountId=data.accountId;
    let amount=data.amount;
    this.credit=new Credit(accountId,amount);
    let observable:Observable<Account>=this.service.updateCredit(this.credit);
    observable.subscribe(
      (account:Account)=>this.account=account,
      err=>{
        console.log("err in update credit "+err.error);
      }  
  );
  } 

}
