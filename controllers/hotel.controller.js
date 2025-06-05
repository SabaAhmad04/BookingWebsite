import {Hotel} from "../models/hotel.model.js"
import { ApiError } from "../utills/apiError.js";
import { ApiResponse } from "../utills/apiResponse.js";
import { asyncHandler } from "../utills/asyncHandler.js"

const createHotel = asyncHandler(async (req,res) => {
        const newHotel = new Hotel(req.body);
        const savedHotel = await newHotel.save();
        if(!savedHotel) 
              {
                  throw new ApiError(401,"something went wrong");
              }
        return res
        .status(200)
        .json(
             new ApiResponse(200, savedHotel, "hotel registered successfully")
        )
})

const upadteHotel = asyncHandler(async (req,res) => {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        return res
        .status(200)
        .json(
            new ApiResponse(200, updatedHotel, "hotel details updated successfully")
        )
})

const deleteHotel = asyncHandler(async(req, res) => {
        await Hotel.findByIdAndDelete(req.params.id);
        return res
        .status(200)
        .json(
            new ApiResponse(200,"hotel deleted successfully")
        )
})

const getHotel = asyncHandler(async (req, res) => {
        const hotel = await Hotel.findById(req.params.id);
        if(!hotel)
             {
                   throw new ApiError(200,"hotel not exist");
             }
        return res
        .status(200)
        .json(
            new ApiResponse(200,hotel,"hotel find successfully")
        )
})

const getAllHotels = asyncHandler(async(req,res) => {
        const hotels = await Hotel.find();
        if(!hotels) 
              {
                   throw new ApiError(401,"no hotel exist")
              }
        return res
        .status(200)
        .json(
             new ApiResponse(200, hotels, "all hotels find successfully")
        )
})

export {
        createHotel,
        upadteHotel,
        deleteHotel,
        getHotel,
        getAllHotels
}
     