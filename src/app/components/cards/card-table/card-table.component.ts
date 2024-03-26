import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ReasonBottomsheetComponent } from '../../bottomsheets/reason-bottomsheet/reason-bottomsheet.component';
import { RequestMainService } from 'src/app/services/request-main.service';
import { ApprovalRequest } from 'src/app/models/models/approvalRequest.model';
import { User } from 'src/app/models/auth/user.model';
import { UserService } from 'src/app/services/user.service';
import { ApprovalService } from 'src/app/services/approval.service';
import { Approval } from 'src/app/models/models/approval.model';
import { EmployeeType } from 'src/app/models/models/employeeType.model';
import { EmpTypeService } from 'src/app/services/emp-type.service';
import { UsersRoles } from 'src/app/models/models/usersroles.model';
import { RequestFormPatient } from 'src/app/models/models/requestFormPatient.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PatientDetailsComponent } from '../../dialogs/patient-details/patient-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessmessageComponent } from '../../notmess/successmessage/successmessage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  cnorequests: RequestFormPatient[] = [];
  // suprequests: RequestsMain[] = [];
  currentUser!: User;
  selectedRequest!: any;
  approval!: Approval;
  empType!: EmployeeType;
  userrole!: UsersRoles;
  _request!: ApprovalRequest;
  _requests: ApprovalRequest[] = [];
  username: string = '';

  constructor(private router: Router, private _snackBar: MatSnackBar, private emptypeservice: EmpTypeService, private approvalService: ApprovalService, private _bottomSheet: MatBottomSheet, private requestService: RequestMainService, private userService: UserService, private dialog: MatDialog) { }
  openBottomSheet1(): void {
    this._bottomSheet.open(ReasonBottomsheetComponent);
  }

  // selectRequest(request: RequestFormPatient): void {
  //   this.selectedRequest = request;
  //   const id = this.selectedRequest.id;
  //   localStorage.setItem('req', JSON.stringify(this.selectedRequest.id))
  //   const app = localStorage.getItem('Approval');
  //   const dec = localStorage.getItem('Decline');
  //   const us = localStorage.getItem('user');
  //   if (app) {
  //     if (us) {
  //       const formData1 = JSON.parse(us);
  //       const approval = new Approval();
  //       approval.id = 0;
  //       approval.approvalRequestId = 2;
  //       approval.status = "";
  //       approval.approvedByUserId = formData1;
  //       approval.created_at = new Date;
  //       this.approvalService.createApproval(approval).subscribe(
  //         (createdApproval) => {
  //           // Handle successful approval
  //           console.log('Request approved:', createdApproval);
  //           // You can perform additional actions or update the UI as needed
  //           // Clear the selectedRequest from localStorage after approval if needed
  //           // if (this.currentUser.empTypeId === 4) {
  //           //   this.selectedRequest.cnoApprovalId = approval.approvalAbbreviation;
  //           // }
  //           // else if (this.currentUser.empTypeId === 5) {
  //           //   this.selectedRequest.supApprovalId = approval.approvalAbbreviation;
  //           // }
  //           this.requestService.updateRequest(this.selectedRequest).subscribe(
  //             (updatedRequest) => {
  //               // Handle successful request update
  //               console.log('Request updated:', updatedRequest);

  //               // You can perform additional actions or update the UI as needed

  //               // Clear the selectedRequest from localStorage after approval if needed
  //               localStorage.removeItem('selectedRequest');
  //             },
  //             (error) => {
  //               console.error('Error updating request:', error);
  //               // Handle error, show error message, etc.
  //             });
  //           localStorage.removeItem('selectedRequest');
  //         },
  //         (error) => {
  //           console.error('Error approving request:', error);
  //           // Handle error, show error message, etc.
  //         }
  //       );
  //       this.requestService.updateRequest(this.selectedRequest)

  //     }
  //   }
  //   else if (dec) {
  //     if (us) {
  //       const formData1 = JSON.parse(us);
  //       const approval = new Approval();
  //       approval.id = 0;
  //       approval.approvalRequestId = 1;
  //       approval.status = "";
  //       approval.approvedByUserId = formData1;
  //       approval.created_at = new Date;
  //       this.approvalService.createApproval(approval).subscribe(
  //         (createdApproval) => {
  //           // Handle successful approval
  //           console.log('Request approved:', createdApproval);
  //           // You can perform additional actions or update the UI as needed
  //           // Clear the selectedRequest from localStorage after approval if needed
  //           // if (this.currentUser.empTypeId === 4) {
  //           //   this.selectedRequest.cnoApprovalId = approval.approvalAbbreviation;
  //           // }
  //           // else if (this.currentUser.empTypeId === 5) {
  //           //   this.selectedRequest.supApprovalId = approval.approvalAbbreviation;
  //           // }
  //           this.requestService.updateRequest(this.selectedRequest).subscribe(
  //             (updatedRequest) => {
  //               // Handle successful request update
  //               console.log('Request updated:', updatedRequest);

  //               // You can perform additional actions or update the UI as needed

  //               // Clear the selectedRequest from localStorage after approval if needed
  //               localStorage.removeItem('selectedRequest');
  //             },
  //             (error) => {
  //               console.error('Error updating request:', error);
  //               // Handle error, show error message, etc.
  //             });
  //           localStorage.removeItem('selectedRequest');
  //         },
  //         (error) => {
  //           console.error('Error approving request:', error);
  //           // Handle error, show error message, etc.
  //         }
  //       );
  //       this.requestService.updateRequest(this.selectedRequest)

  //     }
  //   }

  //   this.ngOnInit();

  // }

  // approveRequest(): void {
  //   if (!this.selectedRequest) {
  //     alert('Please select a request first.');
  //     return;
  //   }

  //   const reqq = localStorage.getItem('req');
  //   const requestId = reqq ? parseInt(reqq, 10) : null;

  //   const confirmation = confirm('Are you sure you want to approve?');
  //   if (confirmation && requestId) {
  //     // User confirmed, proceed with the approval
  //     this.approvalService.createApproval(requestId).subscribe(
  //       (approval) => {
  //         // Handle successful approval
  //         console.log('Request approved:', approval);
  //         // You can perform additional actions or update the UI as needed
  //       },
  //       (error) => {
  //         console.error('Error approving request:', error);
  //         // Handle error, show error message, etc.
  //       }
  //     );
  //   }
  // }

  approveRequest(approvals: Approval) {
    const user = localStorage.getItem('user');

    // Check if the user is logged in
    if (user) {
      // Prompt the user with an alert
      const confirmation = confirm('Are you sure you want to approve this request?');

      // If the user confirms
      if (confirmation) {
        const userId = JSON.parse(user);

        // Call the approval service to update approval and request
        this.approvalService.UpdateApprovalandRequest(approvals, userId).subscribe(() => {
          // Show a success message
          this.openSnackBar("Submitted Succesful", "Close");

          // Navigate to the admin approval page
          this.router.navigate(['/admin/approval']);

          // Refresh the data
          this.ngOnInit();
          this.loadRequests();
        });
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    this._snackBar.openFromComponent(SuccessmessageComponent, {
      duration: 3000
    })
  }


  declineRequest(approvals: Approval) {
    const dialogRef = this._bottomSheet.open(ReasonBottomsheetComponent, {
      data: { approval: approvals }
    });



    dialogRef.afterDismissed().subscribe((reason: string) => {
      console.log('The bottom sheet was closed with reason:', reason);
      // Perform any actions based on the reason if needed

      // Navigate to the admin approval page
      this.router.navigate(['/admin/approval']);
      this.loadRequests();
      this.ngOnInit();
    });
    this.loadRequests();
    this.ngOnInit();

  }



  ngOnInit(): void {
    const userId = localStorage.getItem('user')
    if (userId) {
      const userIdNumber = parseInt(userId, 10);
      this.userService.getUser(userIdNumber).subscribe(
        user => {
          this.currentUser = user;
          this.loadRequests();
        },
        error => {
          console.error('Error retrieving user:', error);
        }
      );
    } else {
      console.error('User ID is null or undefined');
    }

  }
  getRequest(request_id: number): Observable<ApprovalRequest> {
    return this.requestService.getRequestById(request_id);
  }


  loadRequests() {
    const user_id = localStorage.getItem('user');
    if (user_id) {
      this.requestService.getCnoPendingRequests(JSON.parse(user_id)).subscribe(
        requests => {
          this.cnorequests = requests;
          // for (const request of this.cnorequests) {
          //   // request.first_name = request.approvalRequest.status;
          //   this.userService.getUser(request.approvalRequest.entered_By_User_Id).subscribe(user => {
          //     request.first_name = user.first_Name;
          //     request.last_name = user.last_Name;
          //   });
          //   console.log(request);
          // }
        },
        error => {
          console.error('Error retrieving CNO pending requests:', error);
        }
      );
    }
  }
  viewDetails(approval_Request_Id: number) {

    const dialogRef = this.dialog.open(PatientDetailsComponent, {
      width: '50%',
      height: '50%',
      // panelClass: this.isLoading$ ? 'dialog-fullscreen' : '',
      data: { approval_Request_Id: approval_Request_Id },
      // disableClose: this.isLoading$ ? true : false,
    });

    dialogRef.afterClosed().subscribe(() => {
      //console.log('The dialog was closed');
      this.ngOnInit();
    });
  }


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(PatientDetailsComponent, {
  //     // width: this.isLoading$ ? '500px' : '100%',
  //     // height: this.isLoading$ ? 'auto' : '100%',
  //     // panelClass: this.isLoading$ ? 'dialog-fullscreen' : '',
  //     data: { orderedMeals: this.orderedMeals },
  //     // disableClose: this.isLoading$ ? true : false,
  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     //console.log('The dialog was closed');
  //     this.ngOnInit();
  //   });
  // }

  getRequestByRequestId(requestId: number): void {
    this.requestService.getRequestByRequestId(requestId).subscribe(
      request => {
        this._request = request;
        // Assuming there's a property like entered_by_user_id in _request
        const enteredByUserId = this._request.entered_By_User_Id;

        if (this._request.entered_By_User_Id) {
          this.userService.getUser(this._request.entered_By_User_Id).subscribe(
            user => {
              // Assuming there are firstName and lastName properties in the user object
              this.username = `${user.first_Name} ${user.last_Name}`;
            },
            error => {
              console.error(`Error retrieving user with ID ${enteredByUserId}:`, error);
            }
          );
        }

      },
      error => {
        console.error(`Error retrieving request with ID ${requestId}:`, error);
      }
    );
  }

}