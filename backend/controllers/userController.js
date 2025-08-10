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
};


exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({message:'Invalid Credentials'});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch)
        {
            return res.status(400).json({message:'Invalid Credentials'});
        }

        const token=jwt.sign({ id:user._id , role:user.role },process.env.JWT_SECRET,{expireIn:'1d'});
        res.json({message:'Login Succesful',token});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};