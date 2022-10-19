import mongoose from  'mongoose';
import joi from 'joi';
import passwordComplexity from "joi-password-complexity";

const UserSchema= new mongoose.Schema({
    Firstname:{
        type:string,
        required:true,
    },
    Lastname:{
        type:string,
        required:true,
    },
    email:{
        type:string,
        required:true,
    },
    password:{
        type:string,
        required:true,

    },
    
})
const users=mongoose.model('users',UserSchema);

//validation
const validate =(data)=>{
    const schema =joi.object({
        Firstname: joi.string().required().label('Firstname'),
        Lastname : joi.string().required().label('Lastname'),
        email    : joi.string().email().required().label('email'),
        password : passwordComplexity().required().label('password')
    })
      return schema.validate(data);
}

export default {users,validate}