import express from "express"
import { login, register } from "../controllers/userCtr.js"

const userRtr = express.Router()

userRtr.post("/register", register)
userRtr.post("/login", login)

export default userRtr;