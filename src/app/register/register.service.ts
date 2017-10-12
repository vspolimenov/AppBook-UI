import { Injectable }    from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User} from '../user'
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
  private url = environment.devUrl + '/app/register';  // URL to web api
  
 constructor(private http: HttpClient) { }

 register(user: User) { 

  return this.http.post(this.url, user, {  responseType: 'text'});

 }
 logout():void { 
  localStorage.clear();
 }
}
