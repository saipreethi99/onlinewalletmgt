import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authservice';
import { User } from '../model/user';

@Injectable()
export class CustomerService{
    client:HttpClient;
    authService:AuthenticationService;

    baseServiceUrl="http://localhost:8590";
 
    constructor(client:HttpClient,authService:AuthenticationService){
    this.client=client;
    this.authService=authService;
     }
 

    fetchMe():Observable<User>{
     let username=this.authService.getLoginUsername()
     if(username==""|| username==undefined|| username==null){
         return;
     }
     let url=this.baseServiceUrl+"/users/by/username/"+username;  
     let observable:Observable<User>=this.client.get<User>(url);
     return observable;
    }

}