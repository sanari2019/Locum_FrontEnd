import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonBottomsheetComponent } from './reason-bottomsheet.component';

describe('ReasonBottomsheetComponent', () => {
  let component: ReasonBottomsheetComponent;
  let fixture: ComponentFixture<ReasonBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonBottomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
