import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./db/connection.js"

dotenv.config({
      path:'.env'
})

// console.log("MONGODB_URI",process.env.MONGODB_URI)
// console.log("PORT",process.env.PORT)
// console.log("CORS_ORIGIN",process.env.CORS_ORIGIN)


connectDB()
.then(() => {
       app.listen(process.env.PORT || 8000 ,() => {
        console.log(`Server is running on port:${process.env.PORT}`)
       })
})
.catch((error) => {
       console.log(`MONGODB Connection failed!!! ${error}`)
})