const express = require("express");
const app = express()
const students = [
    {
    id: 1,
    firstName: "John",
    lastName: "mike",
    age: 20
},
{
    id: 2,
    firstName: "Steven",
    lastName: "Robert",
    age: 45
},
{
    id: 3,
    firstName: "wale",
    lastName: "kate",
    age: 70
},


// ]
// make this api /api/students name
app.get("/api/students", (req,res)=>{
 res.send(students)
 
})
app.get("/api/students/:id",(req,res)=>{
  const student = students.find((studentWithId)=> studentWithId.id === parseInt(req.params.id))
  !student ? res.send("student is not available") :res.send(student)
    
  
})
app.post("/api/students",(req,res)=>{
  const student = {

    id: students.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  }
  students.push(student)
  res.send(student)

})

// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`Listening on ${port}.......`))

