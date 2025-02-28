const express = require("express");
const { join } = require("path");
let app = express();
app.use(express.json());

let port = 3000;
let obj = [
    {
        name : "varun",
        rollno : "12c5",
        cgpa : 8.75
    },
    {
        name : "vamshi",
        rollno : "12c4",
        cgpa : 9.00
    },
    {
        name : "sanjay",
        rollno : "12b2",
        cgpa : 9.5
    }
]

app.get("/students",(req,res)=>{
    res.status(200).send(obj);
})
app.get("/students/:id",(req,res)=>{
    let {id} = req.params;
    let student = obj.find((student)=>student.rollno === id);
    if(student){
        res.status(200).send(student);
    }
    else{
        res.status(404).send("Student not found");
    }
})
app.post("/students",(req,res)=>{
    let student = req.body;
    obj.push(student);
    console.log("added student succesfully");
})

app.put("/students/:id",(req,res)=>{
    let {id} = req.params;
    let {name,cgpa} = req.body;
    let student = obj.find((student)=>student.rollno===id);
    if(student){
        if(name)
            student.name = name;
        if(cgpa)
            student.cgpa = cgpa;
         console.log("Data updated succesfully");
    }
    else{
        console.log(`No student with ${id} available`);
    }
})

app.delete("/students/:id",(req,res)=>{
    let {id} = req.params;
    let students = obj.filter((student)=>{
        return student.rollno !== id;
    });
    obj = students;
    console.log(obj);
})
app.get("*",(req,res)=>{
    res.send("Welcome to student data fertching application");
})
app.listen(port,()=>{
    console.log("Started the server");
})