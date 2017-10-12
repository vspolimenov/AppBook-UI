import { Injectable } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable()
export class RedirectService {

    constructor(private router: Router) {
    }
    public redirectToHome(): void {
        let link = ['/home'];
        this.router.navigate(link);
    }
    public redirectToRegister(): void {
        let link = ['/register'];
        this.router.navigate(link);
    }
    public redirectToLogin(): void {
        let link = ['/login'];
        this.router.navigate(link);
    }
}
