import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';


import { AddStudentComponent } from './add-student/add-student.component';
import {StudentListComponent} from './student-list/student-list.component';
import { RemoveStudentComponent } from './remove-student/remove-student.component'

const routes :Routes = [
  {
    path:':id/List',
    component:StudentListComponent
  },
  {
    path: 'addStudent',
    component: AddStudentComponent
  },
  {
    path: 'removeStudent',
    component : RemoveStudentComponent
  }
]

@NgModule({
  declarations: [
  AddStudentComponent,
  StudentListComponent,
  RemoveStudentComponent
],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
