const { body,param } = require('express-validator');
const userTypesEnum = ['admin', 'hr', 'employee', 'project manager'];
const deptTypesEnum =['hr','manager','employee','admin']
 const registrationValidator = [
  
    body('userName')
    .notEmpty().withMessage('Field cannot be empty')
    .isAlpha().withMessage('Field must contain only alphabetic characters'),

    body('emailId').notEmpty().withMessage('Field cannot be empty').isEmail().withMessage('emailId is in incorrect format'),
    body('mobile').isInt().withMessage('Invalid number'),
    body('password').notEmpty().withMessage('password cannot be  Empty'),
    body('password').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
    body('userType').isIn(userTypesEnum).withMessage('Invalid user type. Must be one of: admin, hr, employee, project manager'),
    body('userType').notEmpty().withMessage('userType cannot be  Empty'),
    body('department').notEmpty().withMessage('department cannot be  Empty'),
    body('shift').notEmpty().withMessage('shift cannot be  Empty'),
    body('createdDate').notEmpty().withMessage('Date empty'),
    body('gender').notEmpty().withMessage('gender cannot be  Empty'),
    body('marital').notEmpty().withMessage('marital status cannot be  Empty'),
    body('salaryType').notEmpty().withMessage('salaryType cannot be  Empty'),
    body('joiningDate').notEmpty().withMessage('joiningDate cannot be  Empty'),
    body('probitionDate').notEmpty().withMessage('probitionDate cannot be  Empty'),
    body('employementDate').notEmpty().withMessage('employementDate cannot be  Empty'),
    body('currentAddress').notEmpty().withMessage('currentAddress cannot be  Empty'),
    body('permanentAddress').notEmpty().withMessage('permanentAddress cannot be  Empty')
  ]

  const loginValidator = [
    body('emailId').not().isEmpty().withMessage('Field cannot be empty'),
    body('emailId').isEmail().withMessage('emailId is in incorrect format'),
    body('password').not().isEmpty().withMessage('Field cannot be empty'),
    body('password').isLength({min: 6}).withMessage( 'The minimum password length is 6 characters'),
  ]
 
  const userIdBodyValidator =[
    
    body('UserId').not().isEmpty().withMessage('Field cannot be empty'),
    body('UserId').isInt().withMessage('Invalid userId')

  ]

  const userIdParamsValidator =[
    
    param('UserId').not().isEmpty().withMessage('Field cannot be empty'),
    param('UserId').isInt().withMessage('Invalid userId')

  ]

  const deptValidator =[
    body('departmentName').not().isEmpty().withMessage('Field cannot be empty'),
    body('departmentName') .isAlpha().withMessage('Field must contain only alphabetic characters'),
    body('status').isBoolean().withMessage('boolean values only')
    // body('IsActive').isIn(userTypesEnum).withMessage('Invalid user type. Must be one of: admin, hr, employee, project manager'),
  ]

  const deptIdBodyValidator =[
    body('deptId').not().isEmpty().withMessage('Field cannot be empty'),
    body('deptId').isInt().withMessage('Invalid userId')
  ]
  
  const deptIdParamsValidator =[
    param('deptId').not().isEmpty().withMessage('Field cannot be empty'),
    param('deptId').isInt().withMessage('Invalid userId')

  ]

  const designationValidator =[
    body('designationName').not().isEmpty().withMessage('Field cannot be empty'),
    body('designationName') .isAlpha().withMessage('Field must contain only alphabetic characters'),
    body('status').isBoolean().withMessage('boolean values only')
    // body('IsActive').isIn(userTypesEnum).withMessage('Invalid user type. Must be one of: admin, hr, employee, project manager'),
  ]

  const designationIdBodyValidator =[
    body('designationId').not().isEmpty().withMessage('Field cannot be empty'),
    body('designationId').isInt().withMessage('Invalid userId')
  ]
  
  const designationIdParamsValidator =[
    param('designationId').not().isEmpty().withMessage('Field cannot be empty'),
    param('designationId').isInt().withMessage('Invalid userId')

  ]


  module.exports={
    loginValidator,
    registrationValidator,
    userIdParamsValidator,
    userIdBodyValidator,
    deptValidator,
    deptIdBodyValidator,
    deptIdParamsValidator,
    designationValidator,
    designationIdBodyValidator,
    designationIdParamsValidator
  }