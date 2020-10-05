import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction} from '../model/transaction';
import { TransactionService } from '../service/transactionservice';
@Component({
  selector: 'app-get-transaction',
  templateUrl: './get-transaction.component.html',
  styleUrls: ['./get-transaction.component.css']
})
export class GetTransactionComponent {

  constructor(private route:ActivatedRoute, private service:TransactionService) {
    let observable=route.paramMap;
    observable.subscribe((params:ParamMap)=>{
      let idVal:string=params.get("accountId");
      let idNum:number=Number(idVal);
      console.log("id is "+idNum);
    })
   }
   transaction:Transaction;

   findTransactionsByAccountId(accountId:number){
     let observable:Observable<Transaction>=this.service.getTransaction(accountId);
     observable.subscribe(transactionArg=>{this.transaction=transactionArg;
    });
   }
    getTransaction(form:any){
     let data=form.value;
     let accountId=data.accountId;
     this.findTransactionsByAccountId(accountId);
   }

}

  
  