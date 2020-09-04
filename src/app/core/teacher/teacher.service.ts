import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RetrieveTeacherList} from '../../models/RetrieveAlTeacher';
import { Observable } from 'rxjs';
import { AssignTeacherDto, AddTeacherDto, TeacherDto } from 'src/app/models/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url: string = 'http://localhost:5000/api'

  constructor(private http:HttpClient) { }

  getAllTeachersList(adminId:number):Observable<RetrieveTeacherList[]>{
    return this.http.get<RetrieveTeacherList[]>(this.url + '/teacherList/' + adminId)
  }

  assignTeacher(teacherInfo:AssignTeacherDto):Observable<{isAssigned:boolean}>{
    return this.http.post<{isAssigned:boolean}>(this.url+'/assignTeacher',teacherInfo,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  addTeacher(teacher:AddTeacherDto):Observable<{isAdded:boolean}>{
    return this.http.post<{isAdded:boolean}>(this.url+'/addTeacher',teacher,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  getTeacherBySubject(subjectName:string):Observable<TeacherDto[]>{
    return this.http.get<TeacherDto[]>(this.url+'/getTeacher/'+subjectName);
  }


}

