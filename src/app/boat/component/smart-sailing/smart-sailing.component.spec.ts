import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSailingComponent } from './smart-sailing.component';

describe('SmartSailingComponent', () => {
  let component: SmartSailingComponent;
  let fixture: ComponentFixture<SmartSailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
