import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBottomsheetComponent } from './request-bottomsheet.component';

describe('RequestBottomsheetComponent', () => {
  let component: RequestBottomsheetComponent;
  let fixture: ComponentFixture<RequestBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestBottomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
