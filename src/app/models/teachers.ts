export interface TeacherDto{
  id:number;
  first_name:string;
  last_name:string;
  email_id:string;
  contact_no:string;
  experience:number;
  qualification:string;
  school_id:number;
}

export interface AssignTeacherDto{
  teacherId:number;
  className:string
}

export interface AddTeacherDto {
  firstName:string;
  lastName:string;
  emailId:string;
  contactNo:string;
  experience:number;
  qualification:string;
  adminId:number;
}
