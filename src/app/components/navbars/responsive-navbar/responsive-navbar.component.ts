import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.css']
})
export class ResponsiveNavbarComponent implements OnInit {
  constructor() { }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  ngOnInit(): void { }

}
