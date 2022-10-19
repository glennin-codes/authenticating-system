import express from "express";
const routers =express.Router();
import register from "../controllers/registerController.js" ;
import  login from "../controllers/loginController.js" ;


routers.route('/register').post( register);
routers.route('/login').post(login)

export default routers;