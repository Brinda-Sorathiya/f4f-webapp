import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    category: String,
})
const foodMdl = mongoose.model.food || mongoose.model("Food", foodSchema);
export default foodMdl;