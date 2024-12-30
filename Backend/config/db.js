import mongoose from "mongoose";


export const connectDb = async()=>{
    await mongoose.connect(`mongodb+srv://sajini2224:1234567890@cluster0.fy4qy.mongodb.net/food-del`)
    .then(()=>console.log("DB Connected"))
}