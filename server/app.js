import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import "dotenv/config"



const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(cookieParser())





export default app