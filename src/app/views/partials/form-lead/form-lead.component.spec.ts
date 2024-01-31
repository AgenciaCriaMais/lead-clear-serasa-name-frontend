import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLeadComponent } from './form-lead.component';

describe('FormLeadComponent', () => {
  let component: FormLeadComponent;
  let fixture: ComponentFixture<FormLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormLeadComponent]
    });
    fixture = TestBed.createComponent(FormLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
