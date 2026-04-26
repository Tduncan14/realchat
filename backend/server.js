import express from "express"
import dotenv from "dotenv"
import authRoutes from "./Routes/auth.routes.js"
import connectToMongoDb from "./DB/connectToMongoDB.js"

const app = express()
dotenv.config()



app.use(express.json())
app.use("/api/auth", authRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    connectToMongoDb()
    console.log(`server running on port ${PORT}`)
})