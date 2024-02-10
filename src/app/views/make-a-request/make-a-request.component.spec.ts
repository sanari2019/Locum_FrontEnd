import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeARequestComponent } from './make-a-request.component';

describe('MakeARequestComponent', () => {
  let component: MakeARequestComponent;
  let fixture: ComponentFixture<MakeARequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeARequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeARequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
