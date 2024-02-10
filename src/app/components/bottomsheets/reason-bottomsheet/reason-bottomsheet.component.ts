import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Approval } from 'src/app/models/models/approval.model';
import { ApprovalService } from 'src/app/services/approval.service';


@Component({
  selector: 'app-reason-bottomsheet',
  templateUrl: './reason-bottomsheet.component.html',
  styleUrls: ['./reason-bottomsheet.component.css']
})
export class ReasonBottomsheetComponent {
  constructor(private approvalService: ApprovalService, private _bottomSheetRef: MatBottomSheetRef<ReasonBottomsheetComponent>, private fb: UntypedFormBuilder, private router: Router, @Inject(MAT_BOTTOM_SHEET_DATA) public data: { approval: Approval }) {

    this.uhids.push({ uhid0: '' });
  }


  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }



  // registrationForm!: UntypedFormGroup;
  registrationForm!: FormGroup;
  errorMessage: string | undefined;
  pageTitle = 'Register';
  submitted: boolean = false;
  // public loadedRegistration: Registration | undefined;
  // private validationMessages: { [key: string]: { [key: string]: string } };
  firstFormGroup = this.fb.group({
    reason: ['', Validators.required]
  });


  isLinear = false;
  uhids: any[] = [];




  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      dprtmt: ['', Validators.required],
      shift: ['', [Validators.required, Validators.email]],
    });
    // this.uhids.push({ uhid0: '' });
  }





  completedecline() {
    if (this.firstFormGroup.dirty && this.firstFormGroup.valid) {
      const user = localStorage.getItem('user')
      // if (!approvals) {
      //   alert('Please select request(s) first.');
      //   return;
      // }
      // this.approvalService.getApprovals();

      if (user) {
        // const approval = new Approval();
        const userId = JSON.parse(user);
        this.data.approval.decline_Reason = this.firstFormGroup.get('reason')?.value;
        this.approvalService.UpdateDeclineandRequest(this.data.approval, userId).subscribe(() => {
          // this.approval = result;


          // this.approval.approvedByUserId = r
        }, error => {
          // Handle error
        });
        // this.loadRequests();


      }
    } else {
      alert("Please fill the reason ")
    }

  }
  onSaveComplete(): void {
    this.registrationForm.reset();
    // this.router.navigate(['/registrations']);
  }

}
