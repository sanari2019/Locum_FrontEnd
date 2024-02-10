import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableeComponent } from './card-tablee.component';

describe('CardTableeComponent', () => {
  let component: CardTableeComponent;
  let fixture: ComponentFixture<CardTableeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTableeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardTableeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
