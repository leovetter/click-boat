import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateBoatComponent } from './paginate-boat.component';

describe('PaginateBoatComponent', () => {
  let component: PaginateBoatComponent;
  let fixture: ComponentFixture<PaginateBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginateBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginateBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
