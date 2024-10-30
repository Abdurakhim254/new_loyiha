import {getcategorybyid,addcategorydb,updatecategorybyid,deletecategorybyid} from "../db_functions/index.js"
export const getcategory=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await getcategorybyid(id)
        if(data.length==1){
            res.status(200).send(data)
        }else{
            res.status(400).send("Buyurtma topilmadi")
        }
    } catch (error) {
        res.status(400).send("Cetegoryni qidirishda xatoli")
    }
}
export const addcategory=async (req,res)=>{
    try {
        const {category_name}=req.body
        const data=await addcategorydb(category_name)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Category yaratishda xatolik")
    }
}
export const updatecategory=async(req,res)=>{
    try {
        const id=+req.params.id
        const {category_name}=req.body
        const data=await updatecategorybyid(id,category_name)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Categoryni yangilashda xatolik")
    }
}
export const deletecategory=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await deletecategorybyid(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Categoryni o'chirishda xatolik")
    }
}