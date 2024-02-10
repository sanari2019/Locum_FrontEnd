import { Component, OnInit } from '@angular/core';
import { ReasonBottomsheetComponent } from 'src/app/components/bottomsheets/reason-bottomsheet/reason-bottomsheet.component';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet1(): void {
    this._bottomSheet.open(ReasonBottomsheetComponent);
  }


  ngOnInit(): void { }

}
