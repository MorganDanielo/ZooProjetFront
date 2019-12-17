import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningStaffComponent } from './planning-staff.component';

describe('PlanningStaffComponent', () => {
  let component: PlanningStaffComponent;
  let fixture: ComponentFixture<PlanningStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
