import dotenv from "dotenv";
dotenv.config();
import connectDB from "./dp/index.js";

connectDB()

.then(()=>{
    app.listen(process.env,PORT || 8000 , ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! " , err);
    
})