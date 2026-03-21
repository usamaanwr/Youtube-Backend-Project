import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGOBD_URI}`)
        console.log(`\n MongoDB connected  !! DB HOST: ${conectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGO BD CONNECTION IS FAILED", error);
        process.exit(1)
    }
}
export default connectDB;