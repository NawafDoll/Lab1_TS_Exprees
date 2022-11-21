import e from "express";
import express, { Express, Request, Response } from "express";
import validate from '../middelwire/validate'
import {
    movieSchema,
    movieSchemaType,
  } from '../zodSchema/zod_schema';


  
  const router = express.Router();
  
  let movie: movieSchemaType[] = [];
  

  




  router.get('/', (req, res, next) => {
    return res.json(movie);
  });


  router.get('/:name',(req,res)=>{
    const {name}=req.params;
    let z = name.toLowerCase() || name.toLowerCase() 
    movie.map((search)=>{
return  search.name.toLowerCase()===z || search.genre || search.name.toUpperCase()===z? res.json(search) : "Not Found"
    })
   })

   router.get('/:genre',(req,res)=>{
    const {genre}=req.params;
    let r = genre.toLowerCase() || genre.toLowerCase();
     
    movie.map((search)=>{
return  search.genre.toLowerCase()=== r || search.genre.toUpperCase()=== r? res.json(search) : "Not Found"
    })
   })

  

  
  router.post('/', validate(movieSchema), (req, res, next) => {
    const newMovie = req.body as  movieSchemaType;
  
    movie.push(newMovie);
    return res.status(201).json({ message: 'Added ' });
  });

  router.delete('/:id',(req:Request,res:Response)=>{
    const { id } = req.params;
    
   const newMovie= movie.filter((e:any)=>{
    return e.id !== id ;
   });
   movie = newMovie;
   return res.json({
    message:"Deleted"
   })
});


router.put("/:id",(req:Request,res:Response)=>{
    const updateMovie = req.body as  movieSchemaType;
    const { id } = req.params;
   const newMovie = movie.filter((i)=>{
    return i.id !== id ;
   })
   
   newMovie.push(updateMovie )
   movie =  newMovie;
   return res.json({
    message:" Update"
   })
})

  
  export default router