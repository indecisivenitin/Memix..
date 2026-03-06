import express from 'express';
import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const router = express.Router();

router.post('/register', async (req,res)=>{
    try{
        const{name, email, password} = req.body;
        const userAlreadyExist = await User.findOne({email});
        
        if(userAlreadyExist){
            return res.status(400).json({
                message:"user Already Exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        })

        res.status(201).json({
            message:"user registered successfully",
            user
            
        })
    }
    catch(err){
        res.status(500).json({
            message:"Server error",
            error:err.message
        });
    }
})

router.post('/login', async (req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"Invalid credentials"
            })
        };

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Invalid credentials"
            })
        };

        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, 
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.json({
            message:"Login Successfull",
            token
        });

    }
    catch(err){
        res.status(500).json({
            message:"Internal server error",
            error:err.message
        });
    }
})

export default router;