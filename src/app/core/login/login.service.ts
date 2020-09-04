import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Users} from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName : string;
  id :number;

  constructor(private http:HttpClient) {

  }

  private login = 'http://localhost:5000/api/login';

  verifyUser(user:Users): Observable<Users>{
    return this.http.post<Users>(this.login,user,{
      headers:new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
  }
}
