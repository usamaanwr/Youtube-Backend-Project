import dotenv from "dotenv";
dotenv.config();
import connectDB from "./dp/index.js";
import {app} from "./app.js";
const port = process.env.PORT || 8000;
connectDB()
.then(()=>{
    app.listen(port || 8000 , ()=>{
        console.log(`server is running at port : ${port}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! " , err);
    
})