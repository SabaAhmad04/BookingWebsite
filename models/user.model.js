import mongoose,{Schema} from "mongoose";

const userSchema = new Schema ({
           userName: {
                 type:String,
                 required:true,
                 unique:true
           },
           email: {
                 type:String,
                 required:true,
                 unique:true
           },
           password: {
                 type:String,
                 required:true
           },
           isAdmin: {
                 type:Boolean,
                 default:false
           }
}, {timestamps:true})

export const User = mongoose.model("User",userSchema)