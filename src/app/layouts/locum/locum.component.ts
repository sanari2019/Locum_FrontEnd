import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-locum',
  templateUrl: './locum.component.html',
  styleUrls: ['./locum.component.css']
})
export class LocumComponent implements OnInit {
  // isLocumRequestRoute: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Subscribe to route changes
    this.isLocumRequestRoute();

  }

  isLocumRequestRoute(): boolean {
    return this.route.snapshot.url.join('/') === 'locum/request';
  }

}
