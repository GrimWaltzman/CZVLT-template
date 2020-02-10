import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestService {

  private _registerUrl = 'http://localhost:3000/api/users/register';
  private _logInUrl = 'http://localhost:3000/api/users/login';
  constructor(private http: HttpClient,
              private router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }

  logInUser(user){
    return this.http.post<any>(this._logInUrl, user);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/main']);
  }
}
