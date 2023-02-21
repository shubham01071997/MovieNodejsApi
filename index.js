const express=require("express");
const dotenv=require("dotenv");
dotenv.config({path:'config.env'});
require('./database/config');
const app=express();
const port=process.env.PORT;

app.use(express.json());
app.use(require('./router/app'));
app.get("/",(req,res)=>{
    res.send("Hello shubham");
})

app.listen(port,()=>{
    console.log(`api runing ${port}`);
});