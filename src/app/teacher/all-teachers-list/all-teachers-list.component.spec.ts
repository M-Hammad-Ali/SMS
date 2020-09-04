import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTeachersListComponent } from './all-teachers-list.component';

describe('AllTeachersListComponent', () => {
  let component: AllTeachersListComponent;
  let fixture: ComponentFixture<AllTeachersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTeachersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTeachersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
