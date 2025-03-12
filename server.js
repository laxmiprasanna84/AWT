var express=require("express")
var mongoose=require("mongoose")
var app=express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/student")
.then(()=>{console.log("DB connection established successfully")})
.catch((error)=>{console.log("error in connection"+error)})

const Schema=mongoose.Schema
const studentSchema=new Schema({
  "name":{type:String,required:true},
  "age":{type:Number,required:true},
  "branch":{type:String,required:true},
})

const student=mongoose.model('student',studentSchema);

app.post('/student',(req,res)=>{
  const newstudent = new student(req.body);
  newstudent.save()
  .then(()=>{res.status(200).json({"msg":"added successfully"})})
  .catch((error)=>res.status(400).json({"msg":"error in status"+error}))
})


app.get("/student",(req,res)=>{
  student.find()
  .then((student)=>{
    if(student){
      res.json({student})
    }
    else{
      res.status(404).json({"message":"student not found"})
    }
    })
  .catch((error)=>res.status(400).json({"msg":"error in status"+error}))
})

app.get("/student/:name",(req,res)=>{
  student.findOne({name:req.params.name})
  .then((student)=>{
    if(student){
      res.json({student})
    }
    else{
      res.status(404).json({"message":"student not found"})
    }
    })
  .catch((error)=>res.status(400).json({"msg":"error in status"+error}))
})

app.delete("/student/:name",authenticateToken,(req,res)=>{
  student.findOneAndDelete({name:req.params.name})
  .then((student)=>{
    if(student){
      res.json({"msg":"deleted succesfuly",student})
    }
    else{
      res.status(404).json({"message":"student not found"})
    }
    })
  .catch((error)=>res.status(400).json({"msg":"error in status"+error}))
})
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']; 
    if (!authHeader) {
        return res.status(403).json({ message: "No token provided" });
    }
    
    const token = authHeader.split(' ')[1];  
    jwt.verify(token, "cvrcollege", (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token. Login failed" });
        }
        req.user = decoded;
        next();
    });
}

app.listen(3000,()=>{
  console.log("server started on http://localhost:3000")
})