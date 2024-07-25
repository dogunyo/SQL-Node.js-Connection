const express =require('express')
 const studentController = require('../controllers/studentController')
 const routes =express.Router();

routes.post('/addStudent',studentController.addStudent)
//routes.get('/getAllStudent',studentController.getAllStudent)
routes.get('/getStudent', studentController.getStudent) 
routes.get('/getStudentByid/:id',studentController. getStudentById)

module.exports = routes