import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../models/auth';
import { environment } from '../envioments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  apiURL = environment.apiURL;

  userSignup(data: Signup) {
    return this.http.post(`${this.apiURL}/users`, data, {
      observe: 'response',
    });
  }
  isUserPresent(email: string) {
    return this.http.get(`${this.apiURL}/users?email=${email}`);
  }
  isLogin: boolean = localStorage.getItem('CID') ? true : false;
  logout() {
    // TODO: CREATE A MODAL FOR CONFIRMATION
    localStorage.clear();
    this.isLogin = false;
  }
}
