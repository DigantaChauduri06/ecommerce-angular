import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  userSignup(data: Signup) {
    return this.http.post('http://localhost:3000/users', data, {});
  }
}
