const cors =require('cors');
const dotenv=require('dotenv');
const express = require('express');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app=express();
app.use(cors());
app.use(express.json());

const PORT =process.env.PORT || PORT;

app.listen(PORT ,()=>{
    console.log(`Server running on port ${PORT}`);
})