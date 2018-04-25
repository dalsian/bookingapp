import { Injectable } from '@angular/core';
import { Credential } from '../entities/credential';
import { HttpService } from './http.service';
import { UserService } from './user.service';

const JWT_TOKEN = "thiSiSthEtokeNkeY";

@Injectable()
export class AuthService {

  constructor(private httpService: HttpService, private userService: UserService) { }

  login(credential: Credential, callback) {
    this.httpService.login(credential).subscribe(data=> {

        if(data !== null && data !== undefined) {
          if (data.token !== null && data.token !== undefined &&
              data.user !== null && data.user !== undefined && data.user !== {}) {

            this.setToken(data.token); //Save token on successful login
            this.userService.setCurrentUser(data.user);

            return callback(null, data.user);
          } 
        }

        return callback("Invalid account or password.", null);

    }, error => {
        console.log("ERROR >>>> " + error);
        return callback(error, null);
    });
  } 

  logout(): void {
    this.deleteToken();
    this.userService.deleteCurrentUser();
  }

  //------------------- JWT TOKEN -------------------
  getToken(): string {
    return window.localStorage.getItem(JWT_TOKEN);
  }

  setToken(token: string) {
    window.localStorage.setItem(JWT_TOKEN, token);
  }

  deleteToken(): void {
    window.localStorage.removeItem(JWT_TOKEN);
  }
  //------------------- JWT TOKEN -------------------

}
