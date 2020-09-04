import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {ClassListComponent} from '../class-list/class-list.component';
import {SharedModule} from '../shared/shared.module';
import {TeacherListComponent} from '../teacher-list/teacher-list.component';
import { AddClassComponent } from '../add-class/add-class.component';
import { DeleteClassComponent } from './delete-class/delete-class.component';

const routes: Routes = [
  {
    path: ':id/List',
    component: ClassListComponent
  },
  {
    path: ':id/teachers',
    component: TeacherListComponent,
  },
  {
    path : 'addClass',
    component: AddClassComponent,
  },
  {
    path: 'deleteClass',
    component: DeleteClassComponent
  }
]

@NgModule({
  declarations: [
    ClassListComponent,
    TeacherListComponent,
    AddClassComponent,
    DeleteClassComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClassModule { }
