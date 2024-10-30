export const categorymiddleware=(req,res,next)=>{
    try {
        const {category_name}=req.body
        if(!category_name){
            throw new Error("Xatolik bor")
        }
        next()
    } catch (error) {
        res.status(400).send("Xatolik bor")
    }
}