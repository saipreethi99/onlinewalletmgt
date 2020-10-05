import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Transaction} from '../model/transaction';
import { TransactionService } from '../service/transactionservice';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent  {

  constructor(private service:TransactionService) { }
transaction:Transaction;
  addTransaction(form:any){
     let data=form.value;
    let accountId=data.accountId;
    let amount=data.amount;
    let newBalance=data.newBalance;
    let type=data.type;
    this.transaction=new Transaction(-1,accountId,amount,newBalance,type);
    let observable:Observable<Transaction>=this.service.addTransaction(this.transaction);
    observable.subscribe(transactionArg=>{
      this.transaction=transactionArg;
    }
    );
    
  }
}