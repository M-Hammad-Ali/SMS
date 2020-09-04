import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import {AddClassDto} from '../../models/addClass';
import {VerifyAddedClassDto} from '../../models/verifyAddedClass';
import {DeleteClassDto} from '../../models/deleteClass';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  classId:number;

  private url = 'http://localhost:5000/api/schoolClasses' ;

  constructor(private http:HttpClient) { }

  getSchoolClasses(id:number):Observable<any>{
    return this.http.post<number>(this.url + '/'+id,{
      headers:new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
  }

  getClassStudents(id: number,adminId:any):Observable<any>{
    return this.http.post<any>(this.url + '/' + id + '/classStudents', adminId, {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  getClassTeachers(id: number,adminId:any):Observable<any>{
    return this.http.post<any>(this.url + '/' + id + '/classTeachers', adminId, {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  createClass(addClass:AddClassDto):Observable<VerifyAddedClassDto>{
    return this.http.post<VerifyAddedClassDto>('http://localhost:5000/api/createClass' , addClass , {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  deleteClass(id: number, adminId: number): Observable<DeleteClassDto>{
    return this.http.delete<DeleteClassDto>('http://localhost:5000/api/deleteClass/' + id + '/' + adminId,{
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    })
  }
}
