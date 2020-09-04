import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTeachersListComponent } from './all-teachers-list/all-teachers-list.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AssignTeacherComponent } from './assign-teacher/assign-teacher.component';
import { AddNewTeacherComponent } from './add-new-teacher/add-new-teacher.component';
import { RemoveTeacherComponent } from './remove-teacher/remove-teacher.component';

const routes : Routes = [
  {
    path: 'List',
    component: AllTeachersListComponent
  },
  {
    path: 'addNewTeacher',
    component: AddNewTeacherComponent
  },
  {
    path : 'removeTeacher',
    component : RemoveTeacherComponent
  }
]

@NgModule({
  declarations: [
    AllTeachersListComponent,
    AssignTeacherComponent,
    AddNewTeacherComponent,
    RemoveTeacherComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TeacherModule { }
