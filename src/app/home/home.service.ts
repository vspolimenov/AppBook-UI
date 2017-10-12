import { Injectable }    from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User} from '../user'
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
  private url = environment.devUrl + '/app/login';  // URL to web api
  
 constructor(private http: HttpClient) { }

 logout():void { 
  localStorage.clear();
 }
}