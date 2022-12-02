import mongoose from "mongoose";

const connectDb = (handler) => {
    if(mongoose.connection[0].readyState){
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGO_URI)
}