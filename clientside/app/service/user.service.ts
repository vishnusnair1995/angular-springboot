
import { Injectable } from '@angular/core';
import { User } from 'src/app/component/form/User';
// import { HttpClient } from '@angular/common/http/http';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable} from 'rxjs';
import  {LoginRequest} from 'src/app/component/admin/LoginRequest'
@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8089';

  login(loginRequest: LoginRequest) {
    console.log(loginRequest.email+loginRequest.password+loginRequest.recaptchaResponse)
    return this.http.post(this.baseUrl + '/login', loginRequest);
  }

}