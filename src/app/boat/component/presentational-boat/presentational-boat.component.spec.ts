import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationalCatamaranComponent } from './presentational-boat.component';

describe('PresentationalCatamaranComponent', () => {
  let component: PresentationalCatamaranComponent;
  let fixture: ComponentFixture<PresentationalCatamaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationalCatamaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationalCatamaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
