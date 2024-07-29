import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRout from "./routes/food.js";
import userRtr from "./routes/userRt.js";
import cartRt from "./routes/cartRt.js";
import 'dotenv/config'
import orderRtr from "./routes/orderRt.js";

//app config
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoint
app.use("/api/food", foodRout)
app.use("/images", express.static('images'))
app.use("/api/user", userRtr)
app.use("/api/cart", cartRt)
app.use("/api/order", orderRtr)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server started om http://localhost:${port}`);
});

//mongodb+srv://bri_so_6:#Brinda$626@cluster0.mx3gycw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0