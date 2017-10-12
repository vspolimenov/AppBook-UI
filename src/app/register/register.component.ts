import { Component } from '@angular/core';
import { User} from '../user';
import {RegisterService} from './register.service';
import {RedirectService} from '../shared/redirect.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
 // styleUrls: ['./login.component.css']
})
export class RegisterComponent {
  public user: User;
  public confirmedPassword: string;
  public isDuplicateName:boolean;
  
    constructor(private registerService: RegisterService, private redirectService: RedirectService) {
      this.user = new User();
    }

    public register(): void {
      console.log(this.user);
      this.registerService.register(this.user)
        .subscribe((response) => {
          if (response == "NOT_REGISTRATED") {
            console.log(this.user.username);
        this.isDuplicateName = true;
          } else if (response == "REGISTRATED") {
            console.log("REGISTRATED");
            this.redirectService.redirectToLogin();
            
          }
        })
    }
    public isInvalidPassword(): boolean{
      return !(this.user.password == this.confirmedPassword);
    }

    public logout(): void {
      this.registerService.logout();
        this.redirectService.redirectToLogin();
    }
}
