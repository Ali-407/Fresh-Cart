import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  register(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'auth/signup', data);
  }

  login(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'auth/signin', data);
  }

  saveToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }

  islogin(): boolean {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token;
    }
    return false;
  }

  islogout() {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

  decodeToken() {
    try {
      const decoded = jwtDecode(localStorage.getItem('token')!);
      console.log(decoded);
    } catch {
      this.islogout();
    }
  }


  forgotPassword(data: { email: string }): Observable<any> {
    return this.http.post(environment.apiUrl + 'auth/forgotPasswords', data);
  }

  verifyResetCode(data: { resetCode: string }): Observable<any> {
    return this.http.post(environment.apiUrl + 'auth/verifyResetCode', data);
  }

  resetPassword(data: { email: string; newPassword: string }): Observable<any> {
    return this.http.put(environment.apiUrl + 'auth/resetPassword', data);
  }
}
