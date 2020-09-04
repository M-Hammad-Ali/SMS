import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TeacherDetailsComponent} from '../teacher/teacher-details/teacher-details.component';

const routes : Routes = [
  {
    path: ':classId/List',
    component: SubjectListComponent
  }
]

@NgModule({
  declarations: [
    SubjectListComponent,
    TeacherDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class SubjectModule { }
