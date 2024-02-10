import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/auth/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;
  public loginObj = new User();
  constructor(private jwtHelper: JwtHelperService, private fb: FormBuilder, private http: HttpClient, private router: Router, private userService: UserService, private authService: AuthService) { };


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
      rememberMe: [false]
    });
    localStorage.clear();
    localStorage.removeItem('token')

  }

  login() {
    if (this.loginForm.valid) {
      this.loginObj.email = this.loginForm.value.email;
      this.loginObj.password = this.loginForm.value.password;
      this.authService.login(this.loginObj.email, this.loginObj.password).subscribe(
        () => {
          // Redirect to the dashboard or another page on successful login
          const token = localStorage.getItem("token"); // Update key to "token" if that's what you're using

          if (token) {
            if (!this.jwtHelper.isTokenExpired(token)) {
              console.log("Successful")
              this.router.navigate(['/']);
            } else {
              alert("Session Expired. Please log in again");
              this.router.navigate(['/auth/login']);

            }


          } else {
            console.log('initial login')

          }


        },
        error => {
          // Handle login error (display error message, etc.)
          console.error('Login error:', error);
        }
      );
    }
  }




}
