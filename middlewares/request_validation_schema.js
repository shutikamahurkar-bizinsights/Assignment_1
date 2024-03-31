const { body } = require('express-validator');
const userTypesEnum = ['admin', 'hr', 'employee', 'project manager'];
 const registrationValidator = [
    // body('userName').isEmpty().withMessage('userName cannot be empty'),
    // body('userName').isAlpha().withMessage('username should contain only alphabets'),
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
 


  
  module.exports={
    loginValidator,
    registrationValidator
  }