import e from "express";
import express, { Express, Request, Response } from "express";
import validate from '../middelwire/validate'
import {
    bankSchema,
    bankSchemaType,
  } from '../zodSchema/zod_schemeBank';


  
  const routerBank = express.Router();
  
  let bank: bankSchemaType[] = [];
  

  




  routerBank.get('/', (req, res, next) => {
    return res.json(bank);
  });


  routerBank.put(`/wirtdraw/:id/:amount`, (req: any, res) => {
    const id = req.params.id;
    const amount = req.params. amount;
    bank.map((draw) => {
    if (draw.id === id) {
    if (draw.balance >= amount) {
    draw.balance = draw.balance - amount;
    return res.json({
    message:
    `completed procces and your new balnce is ${draw.balance}`,
    });
    } else {
    return res.json({
    message: "you don't have enugh funds" });}
}
})
  })
  
  routerBank.post('/', validate(bankSchema), (req, res, next) => {
    const newUser = req.body as  bankSchemaType;
  
    bank.push(newUser);
    return res.status(201).json({ message: 'Added ' });
  });

  routerBank.delete('/:id',(req:Request,res:Response)=>{
    const { id } = req.params;
    
   const newMovie= bank.filter((e:any)=>{
    return e.id !== id ;
   });
   bank = newMovie;
   return res.json({
    message:"Deleted"
   })
});


routerBank.put("/:id",(req:Request,res:Response)=>{
    const updateuser = req.body as  bankSchemaType;
    const { id } = req.params;
   const newUser = bank.filter((i)=>{
    return i.id !== id ;
   })
   
   newUser.push(updateuser )
   bank =  newUser;
   return res.json({
    message:" Update"
   })
})

  
  export default routerBank