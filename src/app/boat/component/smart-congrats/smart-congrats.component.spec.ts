import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCongratsComponent } from './smart-congrats.component';

describe('SmartCongratsComponent', () => {
  let component: SmartCongratsComponent;
  let fixture: ComponentFixture<SmartCongratsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCongratsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
