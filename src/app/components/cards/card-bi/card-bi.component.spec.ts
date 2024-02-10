import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBiComponent } from './card-bi.component';

describe('CardBiComponent', () => {
  let component: CardBiComponent;
  let fixture: ComponentFixture<CardBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
