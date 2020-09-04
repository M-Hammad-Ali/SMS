import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import {AdminComponent} from './admin.component';
import {CreateSchoolAdminComponent} from './create-school-admin/create-school-admin.component';
import {DeleteSchoolAdminComponent} from './delete-school-admin/delete-school-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'addSchoolAdmin',
    component: CreateSchoolAdminComponent
  },
  {
    path: 'deleteSchoolAdmin',
    component: DeleteSchoolAdminComponent
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    CreateSchoolAdminComponent,
    DeleteSchoolAdminComponent
  ],

  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
