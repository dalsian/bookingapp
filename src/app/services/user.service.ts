import { Injectable } from '@angular/core';
import { Credential } from '../entities/credential';
import { HttpService } from './http.service';
import { User } from '../entities/User';

const CURRENT_USER = "current_user";

@Injectable()
export class UserService {
  
  constructor(private httpService: HttpService) { }

  //------------------- User ROle -------------------
  getCurrentUser(): User {
    return JSON.parse(window.localStorage.getItem(CURRENT_USER));
  }
  setCurrentUser(user: User) {
    window.localStorage.setItem(CURRENT_USER, JSON.stringify(user));
  }
  deleteCurrentUser() {
    window.localStorage.removeItem(CURRENT_USER);
  }
  //------------------- User ROle -------------------

}
