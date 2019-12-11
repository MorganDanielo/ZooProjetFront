import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionStaffComponent } from './connection-staff.component';

describe('ConnectionStaffComponent', () => {
  let component: ConnectionStaffComponent;
  let fixture: ComponentFixture<ConnectionStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
