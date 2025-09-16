import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://himanshuSable:24882488@cluster0.fztlujz.mongodb.net/food-del').then(()=>console.log("DB connected"));
}