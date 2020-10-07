import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authservice';
import { User } from '../model/user';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})

export class AuthenticateComponent implements OnInit {

  constructor(private service:AuthenticationService,private router: Router) {
   }

  ngOnInit(): void {
   console.log("inside authenticate component");
   
  }

  loginSubmit(form:any){
  let data=form.value;
  let username=data.username;
  let password=data.password;
  let observable:Observable<any>=this.service.loginRequest(username,password);
  observable.subscribe(
   tokenResponse=>{
     let userDetails:User=tokenResponse.userDetails;
     let token=tokenResponse.token;
     console.log("user details accountid="+userDetails.accountId +" username="+userDetails.username);
     this.service.saveDetailsOnLoginSuccess(userDetails, token);
     this.router.navigate(['account-details']);
   },
   err=>{

     let text=JSON.stringify(err);
     console.log("err is "+text);
   }
 );
}

}
