import {newclient} from "../db/create_db_table.js"

export const getorderybyid=async(id)=>{
    const data=await newclient.query("Select * from buyurtmalar where id=$1;"[id])
    return data.rows
}

//len
export const deleteorderbyid=async(id)=>{
    await newclient.query("Delete from buyurtmalar where id=$1;"[id])
    return "Ma'lumot o'chirildi"
}
export const fillorder=async(product_narxi,id)=>{
    await newclient.query("Insert into buyurtmalar(buyurtma_narxi,user_id,fillial_id) Values($1,$2,$3)",[product_narxi,id,id])
    return "Buyurtmalar tablega ma'lumot qo'shildi"
}
export const updateorder=async(product_narxi,id)=>{
    await newclient.query("Update buyurtmalar set buyurtma_narxi=$1 where id=$2",[product_narxi,id])
    return "Buyurtmalar tablega ma'lumot yangilandi"
}