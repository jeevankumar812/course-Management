const mongoose =require('mongoose');

const enrollmentSchema=mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,ref:'User',required:true
    },
})