import model from '../model/user.js'
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();
const register= async(req,res)=>{
  
  try{
    
      const {error}= model.validate(req.body);
      if(error)return res.status(400).send({message:error.details[0].message});
      const conflict =  await model.Users.findOne({email:req.body.email})
      if (conflict) return res.status(409).send({message:"User with a given email already exists"})
      const hashpwd = await bcrypt.hash(req.body.password,10);
      await new  model.Users({...req.body,password:hashpwd}).save()
      res.status(201).send('created succesful')
    }catch(err){
      if(err){
        console.error(err);
         return res.status(500).send({message:"internal server error ,engineers are working on it"});
      }
    }
    
  }

 

const login =async(req,res)=>{
  res.send("hi")
}
export default {register, login}

