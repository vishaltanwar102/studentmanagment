import studentModel from "../models/studentEnquirymodel.js";

export const handleNewEnquiry=async(req,res)=>{
    try{
        const {fullName,email,phone_no,collage_name,course,qualification,reference_by}=req.body;
        const result =await studentModel.create({fullName,email,phone_no,collage_name,course,qualification,reference_by});
        res.status(201).send({msg:"Success",data:result});
    }catch(error){
         res.status(400).send({msg:"Failed",data:error});
    }
}
 export const handleGetAllEnquiry=async(req,res)=>{
    try {
        const result = await studentModel.find({});
        res.status(200).send({msg:"Success",data:result});
    } catch (error) {
         res.status(400).send({msg:"Failed",data:error});        
    }
 }
 export const handleUpdateEnquiry=async(req,res)=>{
    try {
        const id=req.params.id;
        const {fullName,address,email,phone_no,collage_name,language_known,current_course,interested_course,qualification,reference_by,start_time,end_time,joining_date,date}=req.body;

        const result = await studentModel.updateOne({_id:id},{$set:{fullName,address,email,phone_no,collage_name,language_known,current_course,interested_course,qualification,reference_by,start_time,end_time,joining_date,date}});
        res.status(200).send({msg:"Success",data:result});
    } catch (error) {
         res.status(400).send({msg:"Failed",data:error});        
    }
 }