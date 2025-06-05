import {Room} from "../models/room.model.js"
import {Hotel} from "../models/hotel.model.js"
import { asyncHandler } from "../utills/asyncHandler.js"
import { ApiError } from "../utills/apiError.js";
import { ApiResponse } from "../utills/apiResponse.js";

const createRoom = asyncHandler(async(req,res) => {
      const hotelid = req.params.hotelid;
      if(!hotelid)
           {
               throw new ApiError(401, "enter valid hotel id")
           }
      const newRoom = new Room(req.body);
      const savedRoom = await newRoom.save();
      if(!savedRoom)
            {
                  throw new ApiError(401,"details not valid");
            }
      await Hotel.findByIdAndUpdate(hotelid, { $push: {rooms : savedRoom._id},});
      return res
      .status(200)
      .json(
           new ApiResponse(200, savedRoom, "room saved successfully")
      )
})

const upadteRoom = asyncHandler(async (req,res) => {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        return res
        .status(200)
        .json(
            new ApiResponse(200, updatedRoom, "room details updated successfully")
        )
})

const deleteRoom = asyncHandler(async(req, res) => {
        const hotelid = req.params.hotelid;
        await Room.findByIdAndDelete(req.params.id);
        await Hotel.findByIdAndUpdate(hotelid, { $pull: {rooms : req.params.id},});
        return res
        .status(200)
        .json(
            new ApiResponse(200,"room deleted successfully")
        )
})

const getRoom = asyncHandler(async (req, res) => {
        const room = await Room.findById(req.params.id);
        if(!room)
             {
                   throw new ApiError(200,"room not exist");
             }
        return res
        .status(200)
        .json(
            new ApiResponse(200,room,"room find successfully")
        )
})

const getAllRooms = asyncHandler(async(req,res) => {
        const rooms = await Room.find();
        if(!rooms) 
              {
                   throw new ApiError(401,"no room exist")
              }
        return res
        .status(200)
        .json(
             new ApiResponse(200, rooms, "all rooms find successfully")
        )
})

export {
        createRoom,
        upadteRoom,
        deleteRoom,
        getRoom,
        getAllRooms
}