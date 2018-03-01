const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

//create Schema
const EmployeeSchema = new mongoose.Schema(
{
    Name: {type: String, require: true},
    ID: Number,
    Title: String,
    HireDate:{ type: Date, Default: Date()},
    Salary: Number,

}
);
const Employee = mongoose.model('Employee', EmployeeSchema, 'Employees');

router.get('/', (request, response) => {
    Employee.find({}, (error, foundEmployees) => {
      if (error){
        console.log('error on find employees:', error);
        response.sendStatus(500);
      } else {
        response.send(foundEmployees);
      }
    })
  });
  
  router.post('/', (request, response) => {
    let newEmployee = new Employees(request.body);
    console.log('Employee to save is', request.body);
    newEmployee.save((error, savedEmployee) => {
      if (error){
        console.log('error on add Employee:', error);
        response.sendStatus(500);
      } else {
        response.sendStatus(201);
      }
    })
  });
  
  router.put('/:id', (request, response) => {
    let id = request.params.id;
    let employeeToUpdate = request.body;
    Game.findByIdAndUpdate(
      {"_id": id} ,
      {$set: employeeToUpdate},
      (error, updatedEmployee) => {
        if (error){
          console.log('error on update Employee:', error);
          response.sendStatus(500);
        } else {
          response.sendStatus(200);
        }
      }
    )
  })
  
  module.exports = router;