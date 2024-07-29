import express from "express"
import { addTcrt, rmvTcrt, getCrt } from "../controllers/cartCtr.js"
import { auth } from "../middleware/auth.js"

const cartRt  = express.Router()

cartRt.post("/add", auth, addTcrt)
cartRt.post("/get", auth, getCrt)
cartRt.post("/remove", auth, rmvTcrt)

export default cartRt