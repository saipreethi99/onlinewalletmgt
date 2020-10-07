export class Debit{
    accountId:number;
    amount:number;

    constructor(accountId:number,amount:number) {
        this.accountId=accountId;
        this.amount=amount;

    }
    getAccountId():number {
        return this.accountId;
    }
    getAmount():number {
        return this.amount;
    }
}