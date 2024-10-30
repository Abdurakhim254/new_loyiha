export const register_update_middleware=(req,res,next)=>{
    try {
        const {ism,familya,tel,email,password,yashash_manzili}=req.body
        if(!ism || !familya || !email || !password || !yashash_manzili){
            throw new Error("Ro'yxatdan o'tish uchun ma'lumotlar yetarli emas")
        }
        if(!tel>0){
            throw new Error("Ro'yxatdan o'tish uchun ma'lumotlar yetarli emas")
        } 
        next()
    } catch (error) {
        res.status(400).send("Ro'yxatdan o'tish uchun ma'lumotlar yetarli emas")
    }
}

export const loginmiddleware=(req,res,next)=>{
    try {
        const{email,password}=req.body
        if(!email || !password){
            throw new Error("Email yoki Passwordda kamchilik bor")
        }
        next()
    } catch (error) {
        res.status(400).send("Email yoki Passwordda kamchilik bor")
    }
}