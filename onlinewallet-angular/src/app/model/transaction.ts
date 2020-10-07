export class Transaction{
  transactionId:number;
  accountId:number;
  amount:number;
  newBalance:number;
  type:string;

  constructor(transactionId:number,accountId:number, amount:number,newBalance:number,type:string){
      this.transactionId=transactionId;
      this.accountId=accountId;
      this.amount=amount;
      this.newBalance=newBalance;
      this.type=type;

}

gettransactionId():number{
  return this.transactionId;
}
getaccountId():number{
  return this.accountId;
}
getamount():number{
  return this.amount;
}
getnewBalance():number{
  return this.newBalance;
}
gettype():string{
  return this.type;
}
  
}