import {getuserbyid,registeruserdb,loginuserdb,deleteuserdb,updateuserdata} from "../db_functions/index.js"
export const getuser=async(req,res)=>{
    try {
        const id=+req.params.id
        const data=await getuserbyid(id)
        if(data.length==1){
            res.status(200).send(data)
        }else{
            res.status(400).send("User not found")
        }
    } catch (error) {
        res.status(400).send("Foydalanuvchini ko'rishda xatolik")
    }
}
export const registeruser=async(req,res)=>{
    try {
        const {ism,familya,tel,email,password,yashash_manzili}=req.body
        const data=await registeruserdb(ism,familya,tel,email,password,yashash_manzili)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Ro'yxatdan o'tishda xatolik")
    }
}
export const loginuser=async(req,res)=>{
    try {
        const{email,password}=req.body
        const data=await loginuserdb(email,password)
        if(data.length==1){
            res.status(200).send("Foydalanuvchi ro'yxatdan o'tgan")
        }else{
            res.status(400).send("Foydalanuvchi ro'yxatdan o'tmagan")
        }
    } catch (error) {
        res.status(400).send("Login qilishda xatolik")
    }
}
export const updateuser=async(req,res)=>{
    try {
        const{ism,familya,tel,email,password,yashash_manzili}=req.body
        const id=+req.params.id
        const data=await updateuserdata(id,ism,familya,tel,email,password,yashash_manzili)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Foydalanuvchini yangilashda xatolik")
    }
}
export const deleteuser=async (req,res)=>{
    try {
        const id=+req.params.id
        const data=await deleteuserdb(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Foydalanuvchini o'chirishda xatolik")
    }
}