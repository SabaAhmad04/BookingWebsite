import {User} from "../models/user.model.js"
import { ApiError } from "../utills/apiError.js";
import { ApiResponse } from "../utills/apiResponse.js";
import { asyncHandler } from "../utills/asyncHandler.js"

const createUser = asyncHandler(async (req,res) => {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        if(!savedUser) 
              {
                  throw new ApiError(401,"something went wrong");
              }
        return res
        .status(200)
        .json(
             new ApiResponse(200, savedUser, "hotel registered successfully")
        )
})

const updateUser = asyncHandler(async (req,res) => {
        const updatedUser = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        return res
        .status(200)
        .json(
            new ApiResponse(200, updatedUser, "hotel details updated successfully")
        )
})

const deleteUser = asyncHandler(async(req, res) => {
        await User.findByIdAndDelete(req.params.id);
        return res
        .status(200)
        .json(
            new ApiResponse(200,"hotel deleted successfully")
        )
})

const getUser = asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if(!user)
             {
                   throw new ApiError(200,"hotel not exist");
             }
        return res
        .status(200)
        .json(
            new ApiResponse(200,user,"hotel find successfully")
        )
})

const getAllUsers = asyncHandler(async(req,res) => {
        const users = await User.find();
        if(!users) 
              {
                   throw new ApiError(401,"no hotel exist")
              }
        return res
        .status(200)
        .json(
             new ApiResponse(200, users, "all hotels find successfully")
        )
})

export {
        createUser,
        updateUser,
        deleteUser,
        getUser,
        getAllUsers
}
     