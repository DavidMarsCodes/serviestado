import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBottomComponent } from './modal-bottom.component';
import { BackButtonComponent } from '../../components-atom/back-button/back-button.component';
import { IconComponent } from '../../components-atom/icon/icon.component';

describe('ModalBottomComponent', () => {
  let component: ModalBottomComponent;
  let fixture: ComponentFixture<ModalBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalBottomComponent,
        BackButtonComponent,
        IconComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('backAction', () => {
    component.backAction();
  });
});
