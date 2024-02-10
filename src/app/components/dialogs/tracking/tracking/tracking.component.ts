import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  user_id: number;
}

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }


}
