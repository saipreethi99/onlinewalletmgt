export class Account{
    accountId:number;
    accountBalance:number;
    status;
    userId:number;

  constructor(accountId,accountBalance:number,status,userId:number) {
    this.accountId=accountId;
    this.accountBalance=accountBalance;
    this.status=status;
    this.userId=userId;
   }

   getAccountId():number{
     return this.accountId;
   }

   getAccountBalance():number{
   return this.accountBalance;
   }

   getStatus(){
     return this.getStatus;
   }

   getUserId():number{
     return this.userId;
   }
}

