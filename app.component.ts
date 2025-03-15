import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  name = 'cvr';
  showTable:boolean = false;

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

  deleteStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
    console.log('Deleted student:',id)
  }
  
} 
