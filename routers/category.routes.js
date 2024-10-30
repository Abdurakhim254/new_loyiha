import express from 'express'
import {getcategory,addcategory,updatecategory,deletecategory} from '../controllers/index.js'
import {categorymiddleware} from '../middlewares/index.js'
export const categoryrouter=express.Router()

categoryrouter.get("/:id",getcategory)
categoryrouter.post("/add",categorymiddleware,addcategory)
categoryrouter.put("/:id",categorymiddleware,updatecategory)
categoryrouter.delete("/:id",deletecategory)