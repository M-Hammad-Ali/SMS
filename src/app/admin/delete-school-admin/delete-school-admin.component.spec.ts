import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSchoolAdminComponent } from './delete-school-admin.component';

describe('DeleteSchoolAdminComponent', () => {
  let component: DeleteSchoolAdminComponent;
  let fixture: ComponentFixture<DeleteSchoolAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSchoolAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
