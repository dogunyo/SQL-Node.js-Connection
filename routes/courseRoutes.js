const express = require('express');
const routes = express.Router();

const courseController = require('../controllers/courseController');


routes.post('/addCourse',courseController.addCourse)
routes.get('/getAllCourses',courseController.getCourses)



module.exports = routes