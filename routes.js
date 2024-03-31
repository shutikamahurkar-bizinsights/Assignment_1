const express = require("express");
const router = express.Router();

var designationCtrl = require('./controllers/designationController');
var userCtrl = require('./controllers/userController');
var deptCtrl = require('./controllers/departmentController');
var validate = require('./middlewares/request_validation_schema');

const { validationResult } = require('express-validator');
//const { query } = require('express-validator');

router.get('/', function (req, res) {
    res.send('Hello World, Working on assignment 1');
  });
  
  

  router.post('/login',validate.loginValidator,(req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      console.log('calling validate.loginValidator');

      // in case request params meet the validation criteria
      userCtrl.login;
    }
    res.status(422).json({errors: errors.array()});
    next();
  });

  router.post('/registeration',validate.registrationValidator,(req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      // in case request params meet the validation criteria
      userCtrl.registeration;
    }
    res.status(400).json({errors: errors.array()});
    next();
  });


 // router.post('/registeration',userCtrl.registeration);
  router.patch('/user/:UserId',userCtrl.updateUser);
  router.delete('/user/:UserId',userCtrl.deleteUser);
  //router.get('/users',userCtrl.getUsers);
  router.get('/user/:UserId',userCtrl.getUser);
  
  router.post('/addDept',deptCtrl.addDept);
  router.patch('/dept/:deptId',deptCtrl.updateDept);
  router.delete('/dept/:deptId',deptCtrl.deleteDept);
  //router.get('/depts',deptCtrl.getDepts);
  router.get('/dept/:deptId',deptCtrl.getDept);
  
  router.post('/addDesignation',designationCtrl.addDesignation);
  router.patch('/designation/:designationId',designationCtrl.updateDesignation);
  router.delete('/designation/:designationId',designationCtrl.deleteDesignation);
  router.get('/designations',designationCtrl.getDesignations);
  router.get('/designation/:designationId',designationCtrl.getDesignation);
  
  router.patch('/forgetPassword',userCtrl.forgetPassword);
//  router.post('/login',userCtrl.login);

  
  module.exports = router;
  
  