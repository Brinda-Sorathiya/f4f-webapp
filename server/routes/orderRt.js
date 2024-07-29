import express from "express"
import { auth } from "../middleware/auth.js"
import {palaceOrder} from "../controllers/orderCtr.js"

const orderRtr = express.Router()

orderRtr.post("/place", auth, palaceOrder)

export default orderRtr