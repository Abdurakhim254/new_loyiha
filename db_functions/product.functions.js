import { newclient } from "../db/create_db_table.js";
export const getproductbyid=async(id)=>{
    const data=await newclient.query("Select * from products where product_id=$1",[id])
    return data.rows
}
export const addproductdb=async(product_name,product_id,product_narxi,product_count,buyurtma_id,category_id)=>{
    await newclient.query("Insert into products(product_name,product_id,product_narxi,product_count,buyurtma_id,category_id)Values($1,$2,$3,$4,$5,$6)",[product_name,product_id,product_narxi,product_count,buyurtma_id,category_id])
    return "Malumot yozildi"
}
export const updateproductdb=async(product_name,product_id,product_narxi,product_count,buyurtma_id,category_id,id)=>{
    await newclient.query("Update products set product_name=$1,product_id=$2,product_narxi=$3,product_count=$4,buyurtma_id=$5,category_id=$6 where id=$7",[product_name,product_id,product_narxi,product_count,buyurtma_id,category_id,id])
    return "Ma'lumot yangilandi"
}
export const deleteproductdb=async(id)=>{
    await newclient.query("Delete from products where id=$1",[id])
    return "Ma'lumot o'chirilid tekshrb ko'rshngiz mumkin"
}