import express from "express";
import { addFood, allFood, remove } from "../controllers/food.js";
import multer from "multer";

const foodRout = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({storage:storage})

foodRout.post("/add",upload.single("image"),addFood);
foodRout.get("/list", allFood)
foodRout.post("/remove", remove)

export default foodRout;
