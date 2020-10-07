import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';
import { AuthenticationService } from '../service/authservice';
import { TransactionService } from '../service/transactionservice';

@Component({
  selector: 'transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  constructor(private transactionService:TransactionService, private authService:AuthenticationService, private router:Router) 
  { }

  transactions:Transaction[];

  ngOnInit(): void {

    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
    }


  let observable:Observable<Transaction[]>=this.transactionService.getTransactions();

   observable.subscribe(
     transactions=>{
       this.transactions=transactions;
       console.log("transactions length="+transactions.length);
     }
       ,
     err=>{
       console.log("err in fetching transactions "+err.message);
     }
       );
     }
    
   

  }
  


