import express from "express";
const app =express();
import cors from 'cors';
import dotenv from "dotenv";
import errHandandler from "./middleware/errHandler.js";
import connectDB from "./db/connect.js";




dotenv.config();
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const port=process.env.PORT || 5003;
app.get('/',(req,res)=>{
    res.send(' welcom to codding');
})
app.use(errHandandler);


//using the mongo url in async function in addition listening for the port after a database has been created
const start=async()=>{
   try{
     await connectDB(process.env.MONGO_URI) 
     app.listen(port,()=>{
        console.log(`listening on ${port}...`);
     })
   }catch(err){
      console.error(err);
   }
}
start();
