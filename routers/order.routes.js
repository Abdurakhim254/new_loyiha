import express from 'express'
import {getorder,deleteorder} from '../controllers/index.js'


export const orderrouter=express.Router()

orderrouter.get("/:id",getorder)
orderrouter.delete("/:id",deleteorder)
