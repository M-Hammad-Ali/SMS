import { Component, OnInit } from '@angular/core';

import {SubjectService} from '../../core/subject/subject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectListDto } from 'src/app/models/subject';
import {NgbDate,NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/core/teacher/teacher.service';
import { TeacherDto } from 'src/app/models/teachers';
import {AssignSubjectTeacherDto} from '../../models/subject';
import { LoginService } from 'src/app/core/login/login.service';
import { RetrieveTeacherList } from 'src/app/models/RetrieveAlTeacher';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  classId:number;
  subjectList: SubjectListDto[];
  closeResult = '';
  assignTeacherForm:FormGroup;
  teacherList = new Array <TeacherDto>();
  assignTeacher: AssignSubjectTeacherDto;
  subjectId:number;
  teacherId:number;
  selectedTeacherId: number;
  allTeacherList: RetrieveTeacherList[];

  constructor(private subjectService: SubjectService,private route:ActivatedRoute,
    private router: Router, private modalService : NgbModal, private fb : FormBuilder,
    private teacherService: TeacherService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.classId = +this.route.snapshot.paramMap.get('classId');
    console.log(this.classId);
    this.subjectService.getSubjectsByClassId(this.classId).subscribe(
      (data) => {
        this.subjectList = data;
        console.log(this.subjectList);
      }
    )
    this.assignTeacherForm = this.fb.group({
      subjectId: ['',[Validators.required]],
      subjectName: ['',[Validators.required]],
      assignedTeacher : [''],
      assignNewTeacher : ['',[Validators.required]]
    })
    this.teacherService.getAllTeachersList(this.loginService.id).subscribe(
      (data) => {
        this.allTeacherList = data;
      }
    )
  }

  open(content,subject) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static'
     }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.teacherService.getTeacherBySubject(subject.subject_name).subscribe(
      (data) => {
        this.teacherList = [];
        this.teacherList.push(...data);
        console.log('Subject Teacher',this.teacherList);
      }
    )

    this.assignTeacherForm.patchValue({
      subjectId : subject.subject_id,
      subjectName: subject.subject_name,
      assignedTeacher: subject.first_name + subject.last_name,
      assignNewTeacher : ''
    });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

    saveTeacher(): void{
      this.selectedTeacherId = this.teacherId;
      this.modalService.dismissAll();
      this.subjectId = this.assignTeacherForm.get('subjectId').value;
      this.assignTeacher = {
        "teacherId": +this.teacherId,
        "subjectId": +this.subjectId
      }
      this.subjectService.updateAndAssignTeacher(this.assignTeacher).subscribe(
        (data) => {
          console.log(data);
          let teacher = this.teacherList.find( obj => obj.id === +this.teacherId);
          let subjectRow = this.subjectList.find( o => o.subject_id === this.subjectId);
          subjectRow.first_name = teacher.first_name;
          subjectRow.last_name = teacher.last_name;
          this.selectedTeacherId = teacher.id;
        }
      )

    }

    onClick(teacherId:number): void{
      this.teacherId = teacherId;
    }

    openTeacherModal(teacherModal,teacherId){
      this.selectedTeacherId = teacherId;
      this.modalService.open(teacherModal, {
        centered: true,
        backdrop: 'static'
       }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

    }
}
