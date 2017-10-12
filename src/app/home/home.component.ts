import { Component } from '@angular/core';
import { User } from '../user';
import { OnInit } from '@angular/core';
import {RedirectService} from '../shared/redirect.service';
import {HomeService} from './home.service'
@Component({
  selector: 'home',
  templateUrl: './home.component.html'
  // styleUrls: ['./login.component.css']
})
export class HomeComponent {
  username: string;
  constructor(private homeService: HomeService, private redirectService: RedirectService) {
    console.log(localStorage.getItem('username'));
    this.username = localStorage.getItem('username');
  }

  public logout(): void {
    this.homeService.logout();
      this.redirectService.redirectToLogin();
  }

}
