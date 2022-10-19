import {users,validate} from "../model/user.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();
const register= async(req,res)=>{
  
  try{
    
      const {error}= validate(req.body);
      if(error)return res.status(400).send({message:error.details[0].message});
      const conflict =  await users.findOne(email=req.body.email)
      if (conflict) return res.status(409).send({message:"User with a given email already exists"})
      const hashpwd = await bcrypt.hash(req.body.password,Number(process.env.SALT));
      
    }catch(err){

  }
}


const login=async(req,res)=>{
    res.send('login');
}

export default {register, login};