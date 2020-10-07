import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService{

     client:HttpClient;

   baseServiceUrl="http://localhost:8590";
   constructor(client:HttpClient){
  this.client=client;
    }

loginRequest(username:string,password:string):Observable<Object>{
 let url=this.baseServiceUrl+"/createtoken";   
 let cred={username,password}; 
 let observable:Observable<Object> =this.client.post<Object>(url,cred);
 return observable;
}

saveDetailsOnLoginSuccess(data,token){
  let username=data.username;
  let accountId=data.accountId;
  console.log("inside save login details,token="+token+" username="+username+" accountid="+accountId);
  localStorage.setItem("accountId",accountId);
  localStorage.setItem("token",token);
  localStorage.setItem("username",username);
}

isAuthenticated(){
  let token=localStorage.getItem("token");
  if(token==null || token==undefined ){
   return false;
  }
  return true;
}


getLoginUsername(){
  let username= localStorage.getItem("username");
  return username;
}

logout(){
console.log("inside logout");
localStorage.removeItem("token")
localStorage.removeItem("username");
localStorage.removeItem("id");
localStorage.removeItem("accountId");
}

}