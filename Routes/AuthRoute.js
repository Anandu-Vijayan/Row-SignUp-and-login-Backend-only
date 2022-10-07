import express from "express"
import { loginUser, signup } from "../Controllers/AuthController.js"

const router = express.Router()

router.post('/signup',signup)
router.post('/login',loginUser)

export default router