import {newclient} from '../db/create_db_table.js'
export const getcategorybyid=async(id)=>{
    const data=await newclient.query("Select * from category where id=$1;",[id])
    return data.rows
}
export const addcategorydb=async(category_name)=>{
    await newclient.query("Insert into category (category_name) Values($1);",[category_name])
    return "Ma'lmot qo'shildi"
}
export const updatecategorybyid=async(id,category_name)=>{
    await newclient.query("Update category set category_name=$1 where id=$2;",[category_name,id])
    return "Ma'lumot yangilandi"
}
export const deletecategorybyid=async(id)=>{
    await newclient.query("Delete from category where id=$1;",[id])
    return "Ma'lumot o'chirildi tekshrb ko'rishingiz mumkin"
}