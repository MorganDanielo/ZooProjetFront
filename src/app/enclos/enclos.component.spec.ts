import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENclosComponent } from './enclos.component';

describe('ENclosComponent', () => {
  let component: ENclosComponent;
  let fixture: ComponentFixture<ENclosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ENclosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ENclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
