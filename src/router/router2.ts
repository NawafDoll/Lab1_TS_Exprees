import e from "express";
import express, { Express, Request, Response } from "express";
import validate from '../middelwire/validate'
import {
    studentSchema,
    studentSchemaType,
  } from '../zodSchema/zod_schema2';


  
  const router = express.Router();
  
  let student: studentSchemaType[] = [];
  

  




  router.get('/', (req, res, next) => {
    return res.json(student);
  });


  router.get('/:major',(req,res)=>{
    const {major}=req.params;
    let z = major.toLowerCase() || major.toLowerCase() 
    student.map((search)=>{
return search.major.toLowerCase()===z || search.major.toUpperCase()===z? res.json(search) : "Not Found"
    })
   })

  

  
  router.post('/', validate(studentSchema), (req, res, next) => {
    const newStudent = req.body as  studentSchemaType;
  
    student.push(newStudent);
    return res.status(201).json({ message: 'Added ' });
  });

  router.delete('/:id',(req:Request,res:Response)=>{
    const { id } = req.params;
    
   const newStudent= student.filter((i)=>{
    return i.id !== id ;
   });
   student =newStudent;
   return res.json({
    message:"Deleted"
   })
});


router.put("/:id",(req:Request,res:Response)=>{
    const updateStudent = req.body as  studentSchemaType;
    const { id } = req.params;
   const newPark = student.filter((i)=>{
    return i.id !== id ;
   })
   
   newPark.push(updateStudent )
   student =  newPark;
   return res.json({
    message:" Update"
   })
})

  
  export default router