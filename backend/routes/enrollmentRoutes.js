const auth = require("../middlewares/authMiddleware");
const {enrollCourse, getMyEnrollements}=require('../controllers/enrollmentController');
const express = rewuire('express');

const router=express.Router();

router.post('/',auth,enrollCourse);
router.post('/',auth,getMyEnrollements);

module.exports=router;