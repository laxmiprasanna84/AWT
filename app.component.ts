import { Component } from '@angular/core';

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

  students=[
    {id:1,name:"sri",age:20},
    {id:2,name:"sai",age:21},
    {id:3,name:"sam",age:19},
    {id:4,name:"ram",age:21} 
  ]  

  toggleTable() {
    this.showTable = !this.showTable;
    console.log("hello") 
  }

  selectedStudent:any

  deleteStudent(id: any) {
    this.students = this.students.filter(student => student.id !== id);
    console.log('Deleted student:',id)
  }
  
  addStudent(id:any, name:any, age:any){
    this.students.push({id:id.value,name:name.value,age:age.value})
    console.log("student added: ",)
  }

  editStudent(student: any){
    this.selectedStudent={...student};
  }

  // updateStudent(){
  //   const index= this.students.findIndex(student => student.id==this.selectedStudent)
  //   console.log(index)
  //   this.students[index]=this.selectedStudent
  // }
} 
