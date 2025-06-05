import {User} from "../models/user.model.js"
import {asyncHandler} from "../utills/asyncHandler.js"
import {ApiError} from "../utills/apiError.js"
import {ApiResponse} from "../utills/apiResponse.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const register = asyncHandler(async (req,res) => {

           const salt = bcrypt.genSaltSync(10);
           const hash = bcrypt.hashSync(req.body.password, salt)    

           const newUser = new User({
               userName:req.body.userName,
               email:req.body.email,
               password:hash,
               isAdmin:req.body.isAdmin
           })
          const user = await newUser.save();
          if(!user)
              {
                    throw new ApiError(400,"something went wrong while registering the user");
              }
          return res.status(200).json(
            new ApiResponse(200, user, "user is registered successfully")
          )
})

const login = asyncHandler(async (req, res) => {
            const {userName, password} = req.body;
            if(!(userName || password))
                   {
                          throw new ApiError(400,"username and password is required");
                   }
            const user = await User.findOne({userName});
            if(!user) 
                  {
                        throw new ApiError(400, "No user exist")
                  }
            const isPasswordCorrect = await bcrypt.compare(password, user.password)
            if(!isPasswordCorrect)
                  {
                       throw new ApiError(400, "Enter valid password") 
                  }
            
            const token = jwt.sign({ id:user._id, isAdmin: user.isAdmin }, process.env.JWT_TOKEN)

            const userData = user.toObject();
            delete userData.password;
            delete userData.isAdmin;

            const options = {
              httpOnly:true,
              secure:true
                            }

            return res
            .status(200)
            .cookie("access_token", token, options)
            .json(
                   new ApiResponse(201, userData, "logged in successfully")
            )
})

export {
       register,
       login
}