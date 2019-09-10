import { Injectable } from '@angular/core';
import { Login } from 'src/app/component/login/Login'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 

}