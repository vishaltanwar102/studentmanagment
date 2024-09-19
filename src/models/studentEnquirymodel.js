import mongoose from "mongoose";

const studentSchema= new mongoose.Schema({
    fullName:{
        type:String,
        require:[true,"please enter fullName"]
    },
    address:{
        type:String,
        default:''
    },
    email:{
        type:String,
        require:[true,"please enter email"]
    },
    phone_no    :{
        type:Number,
        require:[true,"please enter phone number"]
    },
    collage_name:{
        type:String,
        require:[true,"please enter collageName"]
    },
    language_known:{
        type:String,
        default:""
    },
    current_course:{
        type:String,
        default:""
    },
    interested_course:{
        type:String,
        default:""
    },
    qualification:{
        type:String,
        require:[true,"please enter qualification"]
    },
    reference_by:{
        type:String,
        require:[true,"please enter reference"]
    },
    start_time:{
        type:String,
        require:[true,"please enter start time"]
    },
    end_time:{
        type:String,
       default:""
    },
    joining_date:{
        type:String,
        default:""
    },
    date:{
        type:String,
        default:""
    }
},{timestamps:true})

const studentModel =new mongoose.model('std_enquiry',studentSchema);

export default studentModel;