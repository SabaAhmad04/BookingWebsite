import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/users.routes.js"
import hotelRouter from "./routes/hotels.routes.js"
import roomRouter from "./routes/rooms.routes.js"
import auth from "./routes/auth.routes.js"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json());

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/v1/user",userRouter);
app.use("/api/v1/rooms",roomRouter);
app.use("/api/v1/hotels",hotelRouter);
app.use("/api/v1/auth",auth);

export default app;