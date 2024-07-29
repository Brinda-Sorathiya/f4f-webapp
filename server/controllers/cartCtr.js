import userMod from "../models/usermod.js";

const addTcrt = async(req,res) => {
    try {
        let user = await userMod.findOne({_id:req.body.userId})   
        let cartData = await user.cartData
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }else{
            cartData[req.body.itemId] += 1
        }
        await userMod.findByIdAndUpdate(req.body.userId, {cartData})
        console.log(req.body.itemId)
        res.json({ success: true, message: "Item added to cart successfully" });
    } catch (error) {
        res.json({ success: false, message: error });
    }
}

const rmvTcrt = async(req,res) => {
    try {
        let user = await userMod.findOne({_id:req.body.userId})   
        let cartData = await user.cartData
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1
        }
        await userMod.findByIdAndUpdate(req.body.userId, {cartData})
        console.log("i'm removed")
        res.json({ success: true, message: "Item removed from cart successfully" });
    } catch (error) {
        res.json({ success: false, message: error });
    }
}

const getCrt = async(req,res) => {
    
    try {
        let user = await userMod.findOne({_id:req.body.userId})   
        let cartData = await user.cartData
        console.log("i'm getted")
        res.json({ success: true, cartData});
    } catch (error) {
        res.json({ success: false, message: error });
    }
}

export {addTcrt, rmvTcrt, getCrt}