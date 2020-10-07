import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { AccountService } from '../service/accountservice';
import { AuthenticationService } from '../service/authservice';

@Component({
  selector: 'account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit{

  account:Account;
  constructor(private route:ActivatedRoute,private service:AccountService, private authService:AuthenticationService,private router:Router) {     
  
  }
  ngOnInit(): void {
  
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
    }
    
  let  observable:Observable<Account>=this.service.getAccount();
  observable.subscribe(accountArg=>{this.account=accountArg});

  }

  

}
