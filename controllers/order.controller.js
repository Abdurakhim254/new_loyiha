import {getorderybyid,deleteorderbyid} from "../db_functions/index.js"
export const getorder=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await getorderybyid(id)
        // if(data.length==1){
        //     res.status(200).send(data)
        // }else{
        //     res.status(400).send("Buyurtma topilmadi")
        // }
    } catch (error) {
        res.status(400).send("Buyurtmani ko'rishda xatolik")
    }
}
export const deleteorder=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await deleteorderbyid(id)
        // res.status(200).send(data)
        res.send("deleteorder")
    } catch (error) {
        res.status(400).send("Buyurtmani o'chirishda xatolik")
    }
}