import express from "express"
import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js";
import { verifyToken , verifyUser, verifyAdmin} from "../utills/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next) => {
     res.send("hello user you are logged in")
})

router.post("/createUser",createUser)

router.put("/updateUser/:id", verifyUser, updateUser);

router.delete("/deleteUser/:id",verifyUser, deleteUser);

router.get("/getUser/:id",verifyUser, getUser);

router.get("/getUsers",verifyAdmin, getAllUsers)

export default router
