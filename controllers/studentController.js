const { where } = require('sequelize')
const db = require('../models/indexStart')
const createError = require('http-errors')


//use the model
const Student = db.students
const Course = db.courses


module.exports={

//add student

addStudent : async(req,res,next)=>{
    try {
        let info ={
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            couser_id:req.body.couser_id

        }
        const addStudent = await Student.create(info)
        res.status(200).send(addStudent)
    }catch(error){
        next(error)
    }
},
 
//get student by id 

getStudentById  :async(req,res,next)=>{
    try{
        let id =req.params.id 
        let student =await Student.findOne({where: {student_id: id}})
         
        if(!student){
            throw(createError(404,"student does not exist"))
        }
        res.status(200).send(student)
    }catch(error){
        next(error)
    }
},

getStudent : async (req,res,next) => {
    try {
        let allStudents = await Student.findAll({
            include:[{model: Course, atributes:['coursename']}]
        })
        res.status(200).send(allStudents)
    }catch (error) {
        next(error)
    }
},





}