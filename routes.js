const express = require("express");
const router = express.Router();

var designationCtrl = require('./controllers/designationController');
var userCtrl = require('./controllers/userController');
var u = require('./controllers/userController');
var deptCtrl = require('./controllers/departmentController');
var validate = require('./middlewares/request_validation_schema');

const { validationResult } = require('express-validator');
//const { query } = require('express-validator');

router.get('/', function (req, res) {
    res.send('Hello World, Working on assignment 1');
  });
  
//  router.post('/login',userCtrl.login);
  router.post('/login',validate.loginValidator,(req,res) => {
    const errors = validationResult(req)
    console.log(errors);
    if (!errors.isEmpty()) {
      res.status(422).json({errors: errors.array()});
    }else{
      userCtrl.login(req,res);

    }
  });

 // router.post('/registeration',userCtrl.registeration);
  router.post('/registeration',validate.registrationValidator,(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
    userCtrl.registeration(req,res); 
    }
  });

  // router.post('/dummy',userCtrl.dummy);

  //router.patch('/user/:UserId',userCtrl.updateUser);
  router.patch('/user/:UserId',validate.userIdParamsValidator,(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
      userCtrl.updateUser(req,res);
    }  
  });

  //router.delete('/user/:UserId',userCtrl.deleteUser);
  router.delete('/user/:UserId',validate.userIdParamsValidator,(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
      userCtrl.deleteUser(req,res);
    }  
  });


  router.get('/users',userCtrl.getUsers);
 // router.get('/user/:UserId',userCtrl.getUser);
 router.get('/user/:UserId',validate.userIdParamsValidator,(req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({errors: errors.array()});
  }else{
    userCtrl.getUser(req,res);
  }  
});

  router.patch('/forgetPassword',validate.userIdBodyValidator,(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
      userCtrl.forgetPassword(req,res);
    }  
  });

  //router.post('/addDept',deptCtrl.addDept);
  router.post('/addDept',validate.deptValidator,(req, res) => {
    // console.log('checkpoint 1')
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
     deptCtrl.addDept(req,res);
    }  
  });

  
  //router.patch('/dept/:deptId',deptCtrl.updateDept);
  router.patch('/dept/:deptId',validate.deptIdParamsValidator,(req, res) => {
    console.log('checkpoint 1')
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
     deptCtrl.updateDept(req,res);
    }  
  });


  // router.delete('/dept/:deptId',deptCtrl.deleteDept);
  router.delete('/dept/:deptId',validate.deptIdParamsValidator,(req, res) => {
    // console.log('checkpoint 1')
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
     deptCtrl.deleteDept(req,res);
    }  
  });

  router.get('/depts',deptCtrl.getDepts);
  // router.get('/dept/:deptId',deptCtrl.getDept);
  router.get('/dept/:deptId',validate.deptIdParamsValidator,(req, res) => {
    // console.log('checkpoint 1')
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
     deptCtrl.getDept(req,res);
    }  
  });

  
  //router.post('/addDesignation',designationCtrl.addDesignation);
  router.post('/addDesignation',validate.designationValidator,(req, res) => {
    console.log('checkpoint 1')
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
      designationCtrl.addDesignation(req,res);
    }  
  });
  //router.patch('/designation/:designationId',designationCtrl.updateDesignation);
  router.patch('/designation/:designationId',validate.designationIdParamsValidator,(req, res) => {
    console.log('checkpoint 1')
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
      designationCtrl.updateDesignation(req,res);
    }  
  });

 // router.delete('/designation/:designationId',designationCtrl.deleteDesignation);
  router.delete('/designation/:designationId',validate.designationIdParamsValidator,(req, res) => {
    console.log('checkpoint 1')
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
      designationCtrl.deleteDesignation(req,res);
    }  
  });

  router.get('/designations',designationCtrl.getDesignations);
  router.get('/designation/:designationId',validate.designationIdParamsValidator,(req, res) => {
    console.log('checkpoint 1')
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
      res.status(400).json({errors: errors.array()});
    }else{
      designationCtrl.getDesignation(req,res);
    }  
  });

//  router.get('/designation/:designationId',designationCtrl.getDesignation);
  

  
  module.exports = router;
  
  