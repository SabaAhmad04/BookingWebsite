import express from "express"
import {register} from "../controllers/auth.controller.js"
import {login} from "../controllers/auth.controller.js"

const router = express.Router()
router.get("/register",register);
router.get("/login",login);

export default router