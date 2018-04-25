import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router,
              private _userService: UserService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = this._userService.getCurrentUser();
    if(this._authService.getToken !== null &&  currentUser !== null) {
      if (currentUser.role === 'admin') {
        console.log("Guard passes>>>");
        return true;
      }
    }
    console.log("Guard not pass>>>");
    this._router.navigate(['/home']);
    return false;
  }
}
