import mongoose from "mongoose";

const adminSchecma = new mongoose.Schema({
  
     email:{
        type:String,
        required:true,
     },
     password:{
        type:String,
        required:true
     }

},{timestamps:true})

const adminModel = new mongoose.model('admin',adminSchecma)
export default adminModel;