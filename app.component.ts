import { Component } from '@angular/core';
import { ApiStudentService } from './api-student.service';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  call = 'cvr';
  showTable:boolean = true;
  students: any;

  toggleTable() {
    this.showTable = !this.showTable;
    console.log("hello") 
  }

  constructor(private studentService:StudentService){}

  ngOnInit(){
   this.fetchStudents()
  }

  fetchStudents(){
    this.students=this.studentService.getStudents();
  }
  
  deleteStudent(id:any){
    this.studentService.deleteStudent(id)
    this.fetchStudents()
  }

  addStudent(id:any,name:any, age:any){
    this.studentService.addStudent(id, name, age)
    this.fetchStudents()
  }

  editStudent(student:any){
    this.studentService.editStudent(student)
  }
}
