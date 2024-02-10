import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
  styleUrls: ['./index-navbar.component.css']
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor(private jwtHelper: JwtHelperService,) { }

  ngOnInit(): void {
    this.isUserAuthenticated();
  }
  isUserAuthenticated() {
    const token = localStorage.getItem("token");
    if (token) {
      if (!this.jwtHelper.isTokenExpired()) {
        return true;
      }
      else {
        return false;
      }
    } else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem("jwt");

  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

}
