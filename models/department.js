
module.exports=(sequelize, DataTypes)=>{
    const Department = sequelize.define('departments', {
      // Model attributes are defined here
      departmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      departmentName: {
        type: DataTypes.STRING,
        allowNull: false,   
        unique: true
      },
    status :{
    type: DataTypes.BOOLEAN,
    defaultValue: true,

    },
  }, {
    timestamps: false, // Disable createdAt and updatedAt fields
  

 } );
    
    return Department;
    }
    