const auth = require("../middlewares/authMiddleware");
const {enrollCourse, getMyEnrollements}=require('../controllers/enrollmentController');
const express = require('express');

const router=express.Router();

router.post('/',auth,enrollCourse);
router.post('/',auth,getMyEnrollements);

module.exports=router;