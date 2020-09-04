import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchoolAdminComponent } from './create-school-admin.component';

describe('CreateSchoolAdminComponent', () => {
  let component: CreateSchoolAdminComponent;
  let fixture: ComponentFixture<CreateSchoolAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSchoolAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
