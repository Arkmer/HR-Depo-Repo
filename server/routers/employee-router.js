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
      Employed:{type: Boolean, Default: true }
  }
);
const Employee = mongoose.model('Employee', EmployeeSchema, 'hr');

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
    let newEmployee = new Employee (request.body);
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
    Employee.findByIdAndUpdate(
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
  router.delete('/:id', (request, response) => {
    let id = request.params.id;
    Employee.findByIdAndRemove(
      {"_id": id},
      (error, updatedEmployee) => {
        if (error){
          console.log('error on update game:', error);
          response.sendStatus(500);
        } else {
          console.log('something changed to id', id);
          response.sendStatus(200);
        }
      }
    )
  });

  router.get('/hr/total', (request, response) => {
    Employee.find({}, (error, foundEmployees) => {
      if (error){
        console.log('error on find total employees:', error);
        response.sendStatus(500);
      } else {
        response.send(foundEmployees.count());
        console.log(foundEmployees.count())
      }
    })
  }); // end get total emps

  module.exports = router;