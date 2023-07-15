import mongoose from 'mongoose';

let isConnected = false
export const connectDB = async ()=>{
    mongoose.set('strictQuery', true)
    if(isConnected){
        console.log("Mongodb is already connected")
        return
    }
    else{
    try {
        mongoose.connect(
            process.env.MONGO_URI, {
            dbName: "Pizza",
            useNewUrlParser: true,
            useUnifiedTopology: true
            }
        )
        console.log('MongoDB connected')
        isConnected = true;
    } catch (error) {
        console.log(error)
    }
}
}