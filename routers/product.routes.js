import express from 'express'
import {getproduct,addproduct,updateproduct,deleteproduct} from '../controllers/index.js'
import {productmiddleware} from '../middlewares/index.js'

export const productrouter=express.Router()

productrouter.get("/:id",getproduct)
productrouter.post("/add",productmiddleware,addproduct)
productrouter.put("/:id",productmiddleware,updateproduct)
productrouter.delete("/:id",deleteproduct)
