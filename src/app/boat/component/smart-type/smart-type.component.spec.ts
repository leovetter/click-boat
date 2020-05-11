import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTypeComponent } from './smart-type.component';

describe('SmartTypeComponent', () => {
  let component: SmartTypeComponent;
  let fixture: ComponentFixture<SmartTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
