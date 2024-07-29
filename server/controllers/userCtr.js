import userMod from "../models/usermod.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator"

const crtToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await userMod.findOne({ email: email });
        if(!user) return res.status(404).json({success : false, message: "User not found"})
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) return res.json({success : false, message: "Invalid Password, Try again."});

        const token = crtToken(user._id)
        console.log("i'm logged")
        res.status(200).json({success:true, message: "User logged in successfully.", token : token})
    }catch(error){
        return res.status(500).json({success : false, message: error})
    }
}

export const register = async (req, res) => {
    const {name, password, email} = req.body;
    try {
        const exists = await userMod.findOne({email: email});
        if(exists){
            return res.json({success:false, message: "User already exists."})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false, message: "Invalid email."})
        }

        if(password.length<8){
            return res.json({success:false, message: "Password must be at least of 8 characters."})
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new userMod({
            name : name,
            email : email,
            password : hash
        })

        const user = await newUser.save();
        const token = crtToken(user._id);
        console.log("i'm registered")
        res.status(200).json({success:true, message: "User created successfully.", token})

    } catch (error) { 
        console.log(error) 
        res.json({success:false, message: error})
    }
}