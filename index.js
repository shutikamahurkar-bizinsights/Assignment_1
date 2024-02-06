const express = require('express')
var bodyparser = require('body-parser')
// const Department = require('./models/department')
// const Designation = require('./models/designation')
require('./models');
var designationCtrl = require('./controllers/designationController');

var userCtrl = require('./controllers/userController');
var deptCtrl = require('./controllers/departmentController');
const app = express()
app.use(bodyparser.json())
app.get('/', function (req, res) {
  res.send('Hello World, Working on assignment 1');
});

//app.post('/registerUser',userCtrl.registerUser)

app.post('/registeration',userCtrl.registeration);
app.patch('/user/:UserId',userCtrl.updateUser);
app.delete('/user/:UserId',userCtrl.deleteUser);
app.get('/users',userCtrl.getUsers);
app.get('/user/:UserId',userCtrl.getUser);

app.post('/addDept',deptCtrl.addDept);
app.patch('/dept/:deptId',deptCtrl.updateDept);
app.delete('/dept/:deptId',deptCtrl.deleteDept);
app.get('/depts',deptCtrl.getDepts);
app.get('/dept/:deptId',deptCtrl.getDept);

app.post('/addDesignation',designationCtrl.addDesignation);
app.patch('/designation/:designationId',designationCtrl.updateDesignation);
app.delete('/designation/:designationId',designationCtrl.deleteDesignation);
app.get('/designations',designationCtrl.getDesignations);
app.get('/designation/:designationId',designationCtrl.getDesignation);

app.patch('/forgetPassword',userCtrl.forgetPassword);
app.post('/login',userCtrl.login);

app.listen(3000,()=>{
  console.log('App is running on : http://localhost:3000')
})