export class Transfer {
    creditedAccountId:number;
    debitedAccountId:number;
    amount:number;

    constructor(creditedAccountId:number,debitedAccountId:number,amount:number){
        this.creditedAccountId=creditedAccountId;
        this.debitedAccountId=debitedAccountId;
        this.amount=amount;

    }
    getCreditedAccountId():number {
        return this.creditedAccountId;
    }
    getDebitedAccountId():number {
        return this.debitedAccountId;
    }
    getAmountt():number {
        return this.amount;
    }

}