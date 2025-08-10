const cors =require('cors');
const dotenv=require('dotenv');
const express = require('express');

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

const PORT =process.env.PORT || PORT;

app.listen(PORT ,()=>{
    console.log(`Server running on port ${PORT}`);
})