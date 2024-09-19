import express from 'express';
import { handleGetAllEnquiry, handleNewEnquiry, handleUpdateEnquiry } from '../controllers/studentenquirycontroller.js'
const router = express.Router()

router.route('/')
.post(handleNewEnquiry)
.get(handleGetAllEnquiry)

router.route('/:id')
.patch(handleUpdateEnquiry)

export default router