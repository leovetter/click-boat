import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCatamaranComponent } from './smart-catamaran.component';

describe('SmartCatamaranComponent', () => {
  let component: SmartCatamaranComponent;
  let fixture: ComponentFixture<SmartCatamaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCatamaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCatamaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
