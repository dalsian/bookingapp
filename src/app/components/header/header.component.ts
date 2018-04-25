import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../entities/User';
import { MessageService } from '../../services/message.service';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.css']
})
export class AppHeaderComponent implements OnInit {
  
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private _router:Router, private _authService: AuthService,
              private _userService: UserService, 
              private messageService: MessageService){} // injecting the router service

  goHome(){
    this._router.navigate(['home']);
  }
  goLogin(){
    this._router.navigate(['login']);
  }
  goLogout(){
    this._authService.logout();
    this.isLoggedIn = false;
    this.isAdmin = false;
    this._router.navigate(['home']);
  }
  goTheaters(){
    this._router.navigate(['theaters'])
  }
  
  ngOnInit(): void { //for calls from url
    
    const user: User = this._userService.getCurrentUser();
    this.isLoggedIn = this._authService.getToken() !== null;
    this.messageService.loginTriggered.subscribe(
        data => { 
            this.isLoggedIn = true; 
            this.isAdmin = this._userService.getCurrentUser().role === 'admin';
        });
    if(user !== null) {
      this.isAdmin = user.role === 'admin';
    }
  }
}
