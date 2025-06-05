import jwt from "jsonwebtoken"
import { ApiError } from "./apiError.js"


export const verifyToken = (req, res, next) => {
         const token = req.cookies.access_token;
         if(!token)
             {
                  throw new ApiError(401, "unauthorized login!!")
             }
         jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
               if(err)
                  {
                      throw new ApiError(401, "Token is invalid")
                  }
               req.user = user;
               next();
         });
};

export const verifyUser = (req,res,next) => {
        verifyToken(req,res,next, () => {
                   if(req.user.id === req.params.id || req.user.isAdmin)
                     {
                          next();
                     }
                   else 
                     {
                           throw new ApiError(401, "unauthorized login")
                     }
        })
}

export const verifyAdmin = (req,res,next) => {
        verifyToken(req,res,next,  () => {
                   if(req.user.isAdmin)
                     {
                          next();
                     }
                   else 
                     {
                           throw new ApiError(401, "unauthorized login")
                     }
        })
}