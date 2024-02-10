import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { RequestBottomsheetComponent } from 'src/app/components/bottomsheets/request-bottomsheet/request-bottomsheet.component';
import { TrackingBottomsheetComponent } from 'src/app/components/bottomsheets/tracking-bottomsheet/tracking-bottomsheet.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/models/auth/user.model';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrackingComponent } from 'src/app/components/dialogs/tracking/tracking/tracking.component';
import { RequestDialogComponent } from 'src/app/components/dialogs/request-dialog/request-dialog.component';

export interface DialogData {
  user_id: number;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private userService: UserService, private jwtHelper: JwtHelperService, private _bottomSheet: MatBottomSheet, public dialog: MatDialog) { }

  user: User | undefined;
  welcomeMessage: string = '';


  openBottomSheet1(): void {
    this._bottomSheet.open(RequestBottomsheetComponent);
  }


  openBottomSheet2(): void {
    this._bottomSheet.open(TrackingBottomsheetComponent);
  }
  openDialog() {

    const user = localStorage.getItem('user');
    if (user) {
      const user_Id = JSON.parse(user)
      this.dialog.open(TrackingComponent, {

        height: '50%',
        data: {
          user_id: user_Id,
        },
      });
    }

  }
  openreqDialog() {

    const user = localStorage.getItem('user');
    if (user) {
      const user_Id = JSON.parse(user)
      this.dialog.open(RequestDialogComponent, {
        height: 'auto',
        // data: {
        //   user_id: user_Id,
        // },
      });
    }

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

  public logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

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
      }
    }
    return valid;

  }
}
