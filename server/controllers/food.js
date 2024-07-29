import foodMdl from "../models/foodmodel.js";
import fs from "fs";

// add food items
export const addFood = async (req, res) => {
  let img_fn = `${req.file.filename}`;

  const food = new foodMdl({
    name: req.body.name,
    price: req.body.price,
    image: img_fn,
    description: req.body.description,
    category: req.body.category,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all food list
export const allFood = async (req, res) => {
  try {
    const foods = await foodMdl.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export const remove = async (req, res) => {
  try{
    const food = await foodMdl.findById(req.body.id);
    fs.unlink(`images/${food.image}`, ()=>{})
    await foodMdl.findByIdAndDelete(req.body.id);
    res.json({success:true, message:"Food removed"})
  }catch(error){
    console.log(error);
    res.json({success:false, message:"Error"})
  }
}
