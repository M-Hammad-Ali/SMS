import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: 'admin',
      loadChildren: () =>
        import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: 'class',
      loadChildren: ()=>
        import('./class/class.module').then(m => m.ClassModule)
    },
    {
      path: 'student',
      loadChildren : ()=>
        import('./student/student.module').then( m => m.StudentModule)
    },
    {
      path: 'teacher',
      loadChildren:() =>
        import('./teacher/teacher.module').then(m => m.TeacherModule)
    },
    {
      path : 'subject',
      loadChildren:() =>
        import('./subject/subject.module').then(m => m.SubjectModule)
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
