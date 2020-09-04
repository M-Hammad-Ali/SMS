import { Component, OnInit, Input } from '@angular/core';
import { RetrieveTeacherList } from 'src/app/models/RetrieveAlTeacher';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  @Input() teacherId:number;
  @Input() teachersList : RetrieveTeacherList[];
  getTeacher: RetrieveTeacherList;

  constructor() { }

  ngOnInit(): void {
    let teacher = this.teachersList.find(o => o.id === this.teacherId);
    this.getTeacher = teacher;
  }

}
