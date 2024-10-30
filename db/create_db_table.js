import pg from 'pg'
const client=new pg.Client({
    host:"localhost",
    password:"root",
    port:5432,
    database:"postgres",
    user:"postgres"
})
export const createdatabase=async()=>{
    try {
        await client.connect()
        await  client.query("Create database uzum_biznes_new")
        console.log("Database yaratildi")
        await client.end()
    } catch (error) {
        console.error("Database allaqachon yaratilgan")
    }
}
// await createdatabase()
export const newclient=new pg.Client({
    host:"localhost",
    password:"root",
    port:5432,
    database:"uzum_biznes_new",
    user:"postgres"
})
await newclient.connect()
const table_arr=[
    `Create table if not exists fillials(
        id serial primary key,
        joylashgan_joyi varchar(50)
    );`,
    `Create table if not exists foydalanuvchi(
        id serial primary key,
        ism varchar(50),
        familya varchar(50),
        tel int,
        email varchar(50),
        password varchar(50),
        yashash_manzili varchar(50)
    );`,
    `Create table if not exists category(
        id serial primary key,
        category_name varchar(50)
    );`,
    `Create table if not exists buyurtmalar(
        id serial primary key,
        buyurtma_narxi int,
        user_id int,foreign key(user_id) references foydalanuvchi(id)on delete cascade,
        fillial_id int,foreign key(fillial_id) references fillials(id) on delete cascade
    );`,`Create table if not exists products(
        product_name varchar(50),
        product_narxi int,
        product_count int,
        buyurtma_id int,foreign key(buyurtma_id) references buyurtmalar(id) on delete cascade,
        product_id int,foreign key(product_id) references foydalanuvchi(id) on delete cascade,
        category_id int,foreign key(category_id) references category(id) on delete cascade
    );`
]


export const createtable=async()=>{
    try {
        for (const iterator of table_arr) {
            await newclient.query(iterator)
        }
        console.log("Table yaratildi")
    } catch (error) {
        console.error("Table allaqachon yaratilgan")
    }
}
// await createtable()
