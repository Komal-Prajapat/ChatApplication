import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import mongoose from 'mongoose';
config();
const app = express()

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGOURL,{
    
    dbName:"chat APP"
}).then(()=>console.log("db is connected"))

const port = process.env.PORT
app.listen(process.env.port ,()=>{
    console.log("Server is running on port " , port);
})