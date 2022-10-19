import express from "express";
const routers =express.Router();
import controllers from "../controllers/index.js" ;


routers.route('/register').post( controllers.register);
routers.route('/login').post(controllers.login)

export default routers;