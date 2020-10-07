export class Account{
    accountId:number;
    accountBalance:number;
    status:string;
    userId:number;

  constructor(accountId:number,accountBalance:number,status:string,userId:number) {
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

