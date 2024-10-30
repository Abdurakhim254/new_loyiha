import {getproductbyid,addproductdb,updateproductdb,deleteproductdb,fillorder,updateorder} from "../db_functions/index.js"
export const getproduct=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await getproductbyid(id)
        if(data.length==1){
            res.status(200).send(data)
        }else{
            res.status(400).send("Product topilmadi")
        }
    } catch (error) {
        res.status(400).send("Productni ko'rishda xatolik")
    }
}
export const addproduct=async(req,res)=>{
    try {
        const {product_name,product_id,product_narxi,product_count,buyurtma_id,category_id}=req.body
        const result=await fillorder(product_narxi,product_id)
        // const data=await addproductdb(product_name,product_id,product_narxi,product_count,buyurtma_id,category_id)
        res.status(200).send({result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//ishi bor
export const updateproduct=async(req,res)=>{
    try {
        const id=+req.params.id
        const {product_name,product_id,product_narxi,product_count,buyurtma_id,category_id}=req.body
        const data=await updateproductdb(product_name,product_id,product_narxi,product_count,buyurtma_id,category_id,id)
        const result=await updateorder(product_narxi,id)
        res.status(200).send({data,result}) 
    } catch (error) {
        res.status(400).send("Productni yangilashda xatolik")
    }
}
export const deleteproduct=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await deleteproductdb(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Productni o'chirishda xatolik")
    }
}