import adminModel from "../models/adminmodel.js";
import jwt from 'jsonwebtoken'

export const registerAdmin = async (req,res)=>{

     const {email,password} = req.body;
     try{
         const response = await adminModel.create({
                 
                 email:email,
                 password:password,
               
         })
         res.status(201).send({msg:"Success",data:response})
     }
     catch(error){
        console.log("Server error");
        
        res.status(500).send({msg:"Error",data:error})
     }
 }
 export const Login = async (req,res)=>{

    const {email,password} = req.body;
    
    try{
        const response = await adminModel.findOne({
                email:email,
                password:password
        })
        if(response){
            // const token = jwt.sign({...response},process.env.SECRET_KEY,{expiresIn:"1h"})
            res.status(200).send({msg:"Success",data:response})

        }else{
            res.status(400).send({msg:"Error",data:{},error:"incorrect email and  password"})
        }
    }
    catch(error){
        console.log(error);
        
       res.status(400).send({msg:"Error",data:{},error:error})
    }
}