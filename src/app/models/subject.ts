export interface SubjectListDto{
  subject_id : number;
  subject_name : string ;
  teachers_id : number;
  first_name : string;
  last_name : string
}


export interface AssignSubjectTeacherDto{
  teacherId:number;
  subjectId:number;
}
