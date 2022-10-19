import mongoose from  'mongoose';
import joi from 'joi';
import passwordComplexity from "joi-password-complexity";

const UserSchema= new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
    },
    Lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,

    },
    
})
const Users = mongoose.model('users',UserSchema);

//validation
const validate =(data)=>{
    const schema =joi.object({
        Firstname: joi.string().required().label('Firstname'),
        Lastname : joi.string().required().label('Lastname'),
        email   : joi.string().email().required().label('Email'),
        password : passwordComplexity().required().label('password')
    })
      return schema.validate(data);
}

export default {Users,validate};