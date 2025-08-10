const express = require('express');
const { enrollCourse, getMyEnrollments } = require('../controllers/enrollmentController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, enrollCourse);
router.get('/my', auth, getMyEnrollments);

module.exports = router;
