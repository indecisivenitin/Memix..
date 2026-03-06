import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongo_url = process.env.MONGO_URI;

const MongoDbConnection = async () =>{
   await mongoose.connect(mongo_url)
        .then(()=>{
            console.log("MongoDB server is connected");
        }).catch((error)=>{
            console.error("error while connecting to database",error );
        })
    }
export default MongoDbConnection;