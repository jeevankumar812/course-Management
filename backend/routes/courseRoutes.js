const express = require('express');
const { createCourse, getCourses } = require('../controllers/courseController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, createCourse);
router.get('/', getCourses);

module.exports = router;
