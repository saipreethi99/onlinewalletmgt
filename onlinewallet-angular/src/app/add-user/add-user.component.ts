import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { User } from '../model/user';
import { AccountService } from '../service/accountservice';
import { AuthenticationService } from '../service/authservice';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private accountService:AccountService , private authService:AuthenticationService) { }

  user:User;
  account:Account;
  
  addUser(form:any){
    let data=form.value;
    let username=data.username;
    let password=data.password;
    let phoneNo=data.phoneNo;
    this.user=new User(username,password,phoneNo);
    let observable:Observable<Account>= this.accountService.addAccount(this.user);
    observable.subscribe(
    (account:Account)=>this.account,
    err=>{
      console.log("err is "+err.error);
    }

    );
  }

 

}
