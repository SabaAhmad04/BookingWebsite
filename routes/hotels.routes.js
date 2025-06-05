import express from "express"
import { createHotel, deleteHotel, getAllHotels, getHotel, upadteHotel } from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utills/verifyToken.js";

const router = express.Router();

router.post("/createHotel", verifyAdmin, createHotel)

router.put("/updateHotel/:id", verifyAdmin, upadteHotel);

router.delete("/deleteHotel/:id", verifyAdmin, deleteHotel);

router.get("/getHotel/:id",getHotel);

router.get("/getHotels",getAllHotels)

export default router