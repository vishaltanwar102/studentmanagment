import mongoose from "mongoose";

function dbConnect(URL) 
{
    mongoose.connect(URL)
    console.log("DB Connected");
    
    
}

export default dbConnect