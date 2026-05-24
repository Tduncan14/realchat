import express from "express"
import dotenv from "dotenv"
import authRoutes from "./Routes/auth.routes.js"
import connectToMongoDb from "./DB/connectToMongoDB.js"
import messageRoutes from './routes/message.routes.js';
import cookieParser from "cookie-parser";

const app = express()
dotenv.config()



app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    connectToMongoDb()
    console.log(`server running on port ${PORT}`)
})