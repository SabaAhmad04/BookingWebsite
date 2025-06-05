import express from "express"
import { createRoom, deleteRoom, getAllRooms, getRoom, upadteRoom } from "../controllers/room.controller.js";
import { verifyAdmin } from "../utills/verifyToken.js";

const router = express.Router();

router.post("/createRoom/:hotelid", verifyAdmin, createRoom)

router.put("/updateRoom/:id", verifyAdmin, upadteRoom);

router.delete("/deleteRoom/:id/:hotelid", verifyAdmin, deleteRoom);

router.get("/getRoom/:id",getRoom);

router.get("/getRooms",getAllRooms)

export default router