import { Component } from '@angular/core';
import { User } from '../user';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import {RedirectService} from '../shared/redirect.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
  // styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User;

  constructor(private loginService: LoginService, private redirectService: RedirectService) {
    this.user = new User();
  }

  public login(): void {
    console.log(this.user);
    this.loginService.login(this.user)
      .subscribe((response) => {
        if (response == "NOT_FOUND") {
          this.goToRegister()
        } else if (response == "User") {
          this.redirectService.redirectToHome();
          localStorage.setItem('username', this.user.username);
        }
      })
  }

  public goToRegister(): void{
    this.redirectService.redirectToRegister();
  }
}
