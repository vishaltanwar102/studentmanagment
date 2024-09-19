import {Login, registerAdmin } from "../controllers/admincontroller.js";
import express from 'express'
const router = express.Router()

router.route('/')
.post(registerAdmin)   
router.route('/login')
.post(Login)

export default router