import express from 'express'
import dotenv from 'dotenv'
import {userrouter,productrouter,categoryrouter,orderrouter} from './routers/index.js'
import {createdatabase,createtable} from './db/create_db_table.js'

dotenv.config()
const PORT=process.env.PORT
const app=express()
app.use(express.json())

app.use("/user",userrouter)
app.use("/product",productrouter)
app.use("/category",categoryrouter)
app.use("/order",orderrouter)

await createdatabase()
await createtable()
app.listen(PORT,()=>{
    console.log("Server running on port "+PORT)
})