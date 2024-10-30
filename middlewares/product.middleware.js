export const productmiddleware=(req,res,next)=>{
    try {  
        const {product_name,product_id,product_narxi,product_count,buyurtma_id,category_id}=req.body
        if(!product_name){
            throw new Error("Ma'lumot to'liqmas")
        }
        if(!(product_id>0)||!(product_narxi>0)||!(product_count>0)||!(buyurtma_id>0)||!(category_id>0)){
            throw new Error("Ma'lumotlarda kamchiliklar bor")
        }
        next()
    } catch (error) {
        res.status(400).send("Ma'lumot to'liqmas")
    }
}