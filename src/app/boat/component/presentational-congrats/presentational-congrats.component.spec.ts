import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationalCongratsComponent } from './presentational-congrats.component';

describe('PresentationalCongratsComponent', () => {
  let component: PresentationalCongratsComponent;
  let fixture: ComponentFixture<PresentationalCongratsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationalCongratsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationalCongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
