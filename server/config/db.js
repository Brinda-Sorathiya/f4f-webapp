import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://bri_so_6:%23Brinda%24626@cluster0.mx3gycw.mongodb.net/f4f').then(console.log("DB connected"))
}