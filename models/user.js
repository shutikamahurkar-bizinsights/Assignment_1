module.exports=(sequelize, DataTypes)=>{
  const User = sequelize.define('users', {
  
  userId:{
   type: DataTypes.INTEGER,
   primaryKey: true,
   autoIncrement: true,
   unique: true
  },
  userName: {
    type: DataTypes.STRING,
   //allowNull: false,   
    unique: true,
   
  },
  emailId:{
    type: DataTypes.STRING,
   //allowNull: false,
    unique: true,
   
   },
   mobile:{
    type: DataTypes.INTEGER,
   //allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
     //allowNull: false,
     },
     userType: {
      type:   DataTypes.ENUM,
      values: ['admin', 'hr', 'employee','project manager'],
     allowNull: true,
      },
    department: {
      type: DataTypes.STRING,
     //allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
     //allowNull: false,
    },
    shift: {
      type: DataTypes.STRING,
     //allowNull: false,
    },
    createdDate: {
      type: DataTypes.STRING,

      //type: DataTypes.DATE,
      //allowNull: true,
    },
    
    gender: {
      type: DataTypes.STRING,
     //allowNull: false,
    },
    marital: {
      type: DataTypes.STRING,
     //allowNull: false,
    },
    salaryType: {
      type: DataTypes.STRING,
     //allowNull: false,
    },
    joiningDate: {
      type: DataTypes.STRING,

      //type: DataTypes.DATE,
      //allowNull: true,
    },
    probitionDate: {
      type: DataTypes.STRING,

      //type: DataTypes.DATE,
     // allowNull: true,
    },
    employementDate: {
      type: DataTypes.STRING,

      //type: DataTypes.DATE,
      allowNull: true,
    },
    currentAddress: {
      type: DataTypes.STRING,
     //allowNull: false,
    },
    permanentAddress: {
      type: DataTypes.STRING,
     //allowNull: false,
    },
status :{
type: DataTypes.BOOLEAN,
defaultValue: true,
},
  
  }, {
    timestamps: false, // Disable createdAt and updatedAt fields
  
}
);

  return User;
};
