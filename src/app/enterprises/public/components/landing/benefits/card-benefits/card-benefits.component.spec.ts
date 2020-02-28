import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBenefitsComponent } from './card-benefits.component';

describe('CardBenefitsComponent', () => {
  let component: CardBenefitsComponent;
  let fixture: ComponentFixture<CardBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});