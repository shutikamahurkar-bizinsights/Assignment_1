const express = require('express')
var bodyparser = require('body-parser')
require('./models');
const router = require('./routes')
const app = express()
app.use(bodyparser.json())
app.use(router)

app.listen(3000,()=>{
  console.log('App is running on : http://localhost:3000');
  console.log('==================================================================');
  console.log('==================================================================');


})