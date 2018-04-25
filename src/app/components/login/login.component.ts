import { Component, ViewChild } from '@angular/core';
import { Credential } from '../../entities/credential';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class AppLoginComponent {

  constructor(private authService: AuthService, private _router:Router, 
            private messageService: MessageService) {
  }

  @ViewChild('f') form: any;
  credential: Credential = new Credential();

  onSubmit() {
    this.authService.login(this.credential, (err, user) => {
      if(user !== null && user !== undefined && err===null) {
        this.form.reset();
        this.credential.status = "Authentication succussful";
        this.messageService.emitLoginTriggered("loggin");
        this._router.navigate(['home']);
      } else {
        this.credential.status = err;
      }
    });
  }
  goRegister(){
      this._router.navigate(['register']);
  }
}
