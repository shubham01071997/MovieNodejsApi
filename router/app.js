const express=require("express");
const movie=require("../model/movie");
const router=express();
//add movie
router.post("/add-movie",async (req,res)=>{
   const {name}=req.body;
   try{
        const Movie=new movie({name});
        const movieData=await Movie.save();
        if(movieData){
            res.status(201).json({message:"Data Save Successfully"});
         }
    }catch(err){
       res.status(400).json({message:err});
    }
});
//get all movie
router.get("/get-all",async (req,res)=>{
   try{
   const movieData=await movie.find();
   res.status(201).json(movieData);
  }catch(err){
   res.status(400).json({message:err});
    }
});
//get-single movie
router.get("/get-single/:id",async (req,res)=>{
   const _id=req.params.id;
   try{
       const getsinglemovie=await movie.findById({_id:_id});
       res.status(201).json(getsinglemovie);
   }catch(err){
       res.status(400).json({message:err});
        }
   });
//get-paginated?page={page}&size={size} 
router.get("/get-paginated",async (req,res)=>{
   const {page,size}=req.query;
   try{  
    let pageNumber=Number(page);
    let limitValue=Number(size);
    let skipValue=(pageNumber-1)*limitValue;
    const movieData= await movie.find().limit(limitValue).skip(skipValue);
   res.status(201).json(movieData);
  }catch(err){
   console.log(err);
   res.status(400).json({message:err});
    }
});
module.exports=router;