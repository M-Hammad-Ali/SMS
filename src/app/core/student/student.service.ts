import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {AddStudentDto} from '../../models/addStudent'
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string = 'http://localhost:5000/api'

  constructor(private http:HttpClient) { }

  createStudent(student:AddStudentDto): Observable<{isCreated:boolean}>{
    return this.http.post<{isCreated:boolean}>(this.url+'/addStudent',student,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  deleteStudent(classId:number,studentId:number):Observable<{isDeleted:boolean}>{
    return this.http.delete<{isDeleted:boolean}>(this.url+'/deleteStudent'+'/'+classId+'/'+studentId,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
