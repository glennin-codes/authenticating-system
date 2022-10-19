import express from "express";
const routers =express.Router();
import {login, register} from '../controllers/index.js'


routers.route('/register').post(register);
routers.route('/login').post(login)

export default routers;