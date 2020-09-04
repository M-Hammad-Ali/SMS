import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {SubjectListDto} from '../../models/subject'
import {AssignSubjectTeacherDto} from '../../models/subject'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  url : string = 'http://localhost:5000/api'

  constructor(private http : HttpClient) { }

  getSubjectsByClassId(classId: number):Observable<SubjectListDto[]>{
    return this.http.get<SubjectListDto[]>(this.url + '/getSubjects/'+ classId );
  }

  updateAndAssignTeacher(assignTeacher:AssignSubjectTeacherDto):Observable<{isAssigned:boolean}>{
    return this.http.post<{isAssigned:boolean}>(this.url+ '/updateAndAssignTeacher',assignTeacher,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
