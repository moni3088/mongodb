var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = mongoose.model('students');

//get all students
router.get('/students', function (req, res){

    Student.find({}, function (err, students) {
        res.json(students)
    })

});

//add a new student to the db
router.post('/student', function (req, res) {

    var new_student = new Student(req.body);

    new_student.save(function (err, student) {
        res.json(student)
    })

});
//get one student
router.get('/students/:id', function (req, res){

    Student.findById(req.params.id, function (err, student) {
        res.json(student)
    })

});

//update data of one student
router.put('/students/:id', function (req, res){
    res.send({students:'update a student'}) ;
});

//delete one student
router.delete('/students/:id', function (req, res){
    res.send({students:'delete a student'}) ;
});

module.exports = router;