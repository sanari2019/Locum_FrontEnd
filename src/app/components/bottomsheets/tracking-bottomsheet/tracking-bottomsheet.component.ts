import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestMainService } from 'src/app/services/request-main.service';
import { ApprovalRequest } from 'src/app/models/models/approvalRequest.model';
import { DetailsComponent } from '../details/details.component';
import { MyErrorStateMatcher } from 'src/app/my-error-state-matcher';


@Component({
  selector: 'app-tracking-bottomsheet',
  templateUrl: './tracking-bottomsheet.component.html',
  styleUrls: ['./tracking-bottomsheet.component.css']
})
export class TrackingBottomsheetComponent implements OnInit {
  requestFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  requests: ApprovalRequest[] = [];
  drequests: ApprovalRequest[] = [];
  constructor(private requestService: RequestMainService, private _bottomSheetRef: MatBottomSheetRef<TrackingBottomsheetComponent>, private fb: UntypedFormBuilder, private router: Router, private _bottomSheet: MatBottomSheet) { }




  openDetails(request: any): void {
    const bottomSheetRef = this._bottomSheet.open(DetailsComponent, {
      data: { selectedRequest: request },
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
      // Logic to execute after the bottom sheet is closed
    });
  }



  ngOnInit(): void {
    const userId = localStorage.getItem('user');

    // if (userId) {
    //   this.requestService.getPendingRequestsByUserId(parseInt(userId))
    //     .subscribe(
    //       (requests) => {
    //         this.requests = requests;
    //       },
    //       (error) => {
    //         console.error('Error fetching pending requests:', error);
    //       }
    //     );
    //   this.requestService.getDecidedRequestsByUserId(parseInt(userId))
    //     .subscribe(
    //       (requests) => {
    //         this.drequests = requests;
    //       },
    //       (error) => {
    //         console.error('Error fetching pending requests:', error);
    //       }
    //     );
    // }


  }

}
