import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema ({
           name: {
                   type:String,
                   required:true
           },
           title: {
                   type:String,
                   required:true
           },
           type: {
                   type:String,
                   required:true
           },
           city: {
                   type:String,
                   required:true,
           },
           distance: {
                   type:String,
                   required:true
           },
           desc: {
                   type:String,
                   required:true
           },
           photos: {
                   type:[String]
           },
           rating: {
                   type:Number,
                   min:0,
                   max:5
           },
           rooms: {
                   type:[String]
           },
           cheapestPrice: {
                   type:Number,
                   required:true
           },
           featured: {
                   type:Boolean,
                   default:false
           }
});

export const Hotel = mongoose.model("Hotel",hotelSchema);