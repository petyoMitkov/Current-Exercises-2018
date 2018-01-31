import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmiComponent } from './form-submi.component';

describe('FormSubmiComponent', () => {
  let component: FormSubmiComponent;
  let fixture: ComponentFixture<FormSubmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
