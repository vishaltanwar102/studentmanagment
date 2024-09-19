import bodyParser from 'body-parser';
import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import dbConnect from './src/config/dbConnect.config.js';
import adminRoutes from './src/routers/adminroute.js';
import studentEnquiry from './src/routers/studentEnquiryroute.js'
import cors from 'cors'
const app =express();

const URL = "mongodb://localhost:27017/StudentManagement"
const port = process.env.PORT||4000
dbConnect(URL)  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/adminRegister',adminRoutes)
app.use('/studentEnquiry',studentEnquiry)

app.listen(port,()=>{
    console.log('server is running on port '+port);
})