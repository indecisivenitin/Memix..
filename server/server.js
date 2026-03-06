import express from 'express'
import cookieParser from 'cookie-parser';
import  app from './src/app.js' ;
import dotenv from 'dotenv';
import MongoDbConnection from './src/config/db.js'
import authRoutes from './src/routes/authRoutes.js'
import cors from 'cors'
dotenv.config();
;

app.get('/', (req,res)=>{
    res.send("Welcome to Memix API")
})

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/auth', authRoutes)

MongoDbConnection();
app.listen(process.env.PORT,
    ()=>{
        console.log(`server is running on port: ${process.env.PORT}`)
    }
);
