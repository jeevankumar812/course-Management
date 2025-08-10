const Enrollment = require('../models/Enrollment');


exports.enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const enrollment = await Enrollment.create({ student: req.user.id, course: courseId });
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getMyEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ student: req.user.id }).populate('course');
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
