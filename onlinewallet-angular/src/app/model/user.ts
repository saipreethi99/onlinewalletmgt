export class User{
    username:string;
    password:string;
    phoneNo:number;
    role:string="user";
    accountId:number;
    constructor(username:string,password:string,phoneNo:number){
        this.username=username;
        this.password=password;
        this.phoneNo=phoneNo;
    }

    getAccountId(){
        return this.accountId;
    }
    getUsername():string {
        return this.username;
    }
    getPassword():string {
        return this.password;
    }
    getPhoneNo():number {
        return this.phoneNo;
    }
}