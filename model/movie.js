const mangoes=require("mongoose");
const movieSchema=new mangoes.Schema({
    name:{
        type:String,
        required:true
       }
});
const movieDB=mangoes.model('MovieSchema',movieSchema);
module.exports=movieDB;