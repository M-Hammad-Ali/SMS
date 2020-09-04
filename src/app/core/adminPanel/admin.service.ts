import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import {SchoolAdminsDto} from '../../models/schoolAdmins';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  private urlAdminData = 'http://localhost:5000/api/schoolAdmins';

  getSchoolAdmins():Observable <SchoolAdminsDto>{
    return this.http.get <SchoolAdminsDto>(this.urlAdminData)
      .pipe(
        tap(data => JSON.stringify(data))
      );
  }

  createSchoolAdmins(schoolAdmin:SchoolAdminsDto):Observable<any>{
    return this.http.post<SchoolAdminsDto>(this.urlAdminData,schoolAdmin,{
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
  }

  deleteSchoolAdmins(id:number) : Observable<any>{
    return this.http.delete<any>(this.urlAdminData + '/' + id,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

}
