import express from "express";
import {getuser,registeruser,loginuser,updateuser,deleteuser} from '../controllers/index.js'
import {register_update_middleware,loginmiddleware} from '../middlewares/index.js'

export const userrouter = express.Router()

userrouter.get("/:id",getuser)
userrouter.post("/register",register_update_middleware,registeruser)
userrouter.post("/login",loginmiddleware,loginuser)
userrouter.put("/:id",register_update_middleware,updateuser)
userrouter.delete("/:id",deleteuser)


