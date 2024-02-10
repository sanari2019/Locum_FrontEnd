import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardTableComponent } from '../../cards/card-table/card-table.component';
import { RequestMainService } from 'src/app/services/request-main.service';
import { ApprovalRequest } from 'src/app/models/models/approvalRequest.model';
import { Approval } from 'src/app/models/models/approval.model';
import { ApprovalService } from 'src/app/services/approval.service';

export interface DialogData {
  approval_Request_Id: number;
  id: number;
}

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  _requests: ApprovalRequest[] = [];
  request!: Approval;

  constructor(
    public approvalService: ApprovalService,
    public requestService: RequestMainService,
    public dialogRef: MatDialogRef<CardTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  ngOnInit(): void {
    // Access the array of requests here using this.data.requests
    this.requestService.getRequestsByRequestId(this.data.approval_Request_Id).subscribe(requests => {
      this._requests = requests;
    })
    this.approvalService.getApprovalById(this.data.id).subscribe(request => {
      this.request = request;
    })
    console.log('Received requests data:', this.data.approval_Request_Id)

  }

}
