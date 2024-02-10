import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  collapseShow = "hidden";
  constructor() { }

  ngOnInit() { }
  // toggleCollapseShow(classes) {
  //   this.collapseShow = classes;
  // }

}
