import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema({
           title: {
                type: String,
                required:true
           },
           price: {
                type:Number,
                required:true
           },
           maxPeople: {
                type:Number,
                required:true
           },
           desc: {
                type:String,
                required:true
           },
           roomNumbers: [{number:Number, unavailableDates:{type:[Date]}}],
}, {timestamps:true})

export const Room = mongoose.model("Room",roomSchema);