import mongoose from 'mongoose'


const connectDB = async(url) =>{

    try{
        await mongoose.connect(url)
        console.log("Mongoo DB connected succesfully")
    }catch(err){
        console.error("MongoDB connection error:", err.message)
    }
}

export default connectDB
