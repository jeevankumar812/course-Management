const cors =require('cors');
const dotenv=require('dotenv');
const express = require('express');

dotenv.config();

const app=express();
app.use(cors());
app.use(express.cors());