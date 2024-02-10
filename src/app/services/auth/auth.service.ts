import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.urlAddress + '/api/users';

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient, private router: Router) { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => {
          // Assuming the backend returns a token on successful login
          if (response && response.token && response.user) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', response.user.id);
          }

        },
          error => {
            // Handle login error, log or display a user-friendly message
            console.error('Login failed:', error);
          })
      );
  }

  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated1(): boolean {
    const token = localStorage.getItem("token");
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }
}
