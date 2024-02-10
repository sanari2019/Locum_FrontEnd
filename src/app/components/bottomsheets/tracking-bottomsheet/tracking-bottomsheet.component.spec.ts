import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingBottomsheetComponent } from './tracking-bottomsheet.component';

describe('TrackingBottomsheetComponent', () => {
  let component: TrackingBottomsheetComponent;
  let fixture: ComponentFixture<TrackingBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingBottomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
