import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/models/auth/user.model';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  constructor(private router: Router, private userService: UserService, private jwtHelper: JwtHelperService,) { }
  user: User | undefined;
  welcomeMessage: string = '';


  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

  ngOnInit(): void {
    this.decodeToken();
    this.isUserAuthenticated();
    console.log(this.isUserAuthenticated());
    const userId = localStorage.getItem('user');

    // Call the service method to get the user's first name
    if (userId) {
      this.userService.getUser(parseInt(userId)).subscribe(
        (response) => {
          this.user = response;
        },
        (error: any) => {
          console.error('Error fetching user name:', error);
        }
      );
    }
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
    // if (token && !this.jwtHelper.isTokenExpired(token)) {
    //   return true;
    // }
    // else {
    //   return false;
    // }

  }

  decodeToken() {
    const token = localStorage.getItem('token');
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    var valid = false;
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(currentTimeInSeconds);

      console.log('Decoded Token:', decodedToken);
      if (decodedToken.exp > currentTimeInSeconds) {
        console.log('Token is valid.');
        valid = true;
        const userstring = localStorage.getItem('user');
        if (userstring) {
          // Parse the JSON string to an object
          //this.user = userstring
        }


      } else {
        console.log('not')
        valid = false;
        this.logout();
      }
    }
    return valid;

  }

  logout(): void {
    // Clear user-related data from local storage or session storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.clear();

    // Redirect the user to the login page or any other desired page
    this.router.navigate(['/auth/login']);
  }
}
