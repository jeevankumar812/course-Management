const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

exports.registerUser=async(req,res)=>{
    try {
        const {name,email,passsword}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({message:'Email Already in Use'});
        }
        const hashedPassword=await bcrypt.hash(passsword,10);
        const user=await User.create({name,email,password:hashedPassword,role});
        res.status(201).json({message:'User Registered Succesfully'});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}