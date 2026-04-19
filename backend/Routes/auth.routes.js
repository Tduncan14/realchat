import express from "express"
import { loginUser, signup, logout } from "../Controllers/auth.controllers.js"

const router = express.Router()



router.post("/signup", signup)


router.post("/login", loginUser)

router.post('/logout', logout)


export default router