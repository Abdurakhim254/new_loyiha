import { newclient } from "../db/create_db_table.js";
export const getuserbyid=async(id)=>{
    const data=await newclient.query("Select * from foydalanuvchi where id=$1",[id])
    return data.rows
}

export const registeruserdb=async(ism,familya,tel,email,password,yashash_manzili)=>{
    const data=await newclient.query("Insert into foydalanuvchi(ism,familya,tel,email,password,yashash_manzili) Values($1,$2,$3,$4,$5,$6)",[ism,familya,tel,email,password,yashash_manzili])
    return "Ma'lumot yozildi"
}
export const deleteuserdb=async(id)=>{
    const data=await newclient.query("Delete from foydalanuvchi where id=$1",[id])
    return "Ma'lumot o'chirildi tekshrb ko'rshngz mumkin"
}
export const updateuserdata=async(id,ism,familya,tel,email,password,yashash_manzili)=>{
    const data=await newclient.query("Update foydalanuvchi set ism=$1,familya=$2,tel=$3,email=$4,password=$5,yashash_manzili=$6 where id=$7",[ism,familya,tel,email,password,yashash_manzili,id])
    return "Ma'lumot yangilandi"
}
export const loginuserdb=async(email,password)=>{
    const data=await newclient.query("Select * from foydalanuvchi where email=$1 and password=$2",[email,password])
    return data.rows
}