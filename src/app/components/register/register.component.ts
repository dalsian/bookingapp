import { Component } from '@angular/core';
import {User} from '../../entities/User'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['./register.css']
})
export class AppRegisterComponent {
    model: User
    confirmPassword: string;
    constructor(){
        this.model = new User();
        this.confirmPassword = "";
    }
    onSubmit() {
        
    }
}
