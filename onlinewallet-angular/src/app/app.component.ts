import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineWallet Management';

 constructor(private authService:AuthenticationService,private router: Router){

 }

  isLogin(){
   return this.authService.isAuthenticated();
  }

  logout(){
  this.authService.logout();
  this.router.navigate(['login']);

  }
}
