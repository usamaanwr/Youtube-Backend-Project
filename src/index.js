import dotenv from "dotenv";
dotenv.config();
import connectDB from "./dp/index.js";
import {app} from "../src/app.js";
connectDB()
const port = process.env.PORT || 8000
.then(()=>{
    app.listen(process.env,port || 8000 , ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! " , err);
    
})