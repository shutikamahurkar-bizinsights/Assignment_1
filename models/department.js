
module.exports=(sequelize, DataTypes)=>{
    const Department = sequelize.define('departments', {
      // Model attributes are defined here
      DepartmentId : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      DepartmentName: {
        type: DataTypes.STRING,
        allowNull: false,   
        unique: true
      },
    IsActive :{
    type: DataTypes.BOOLEAN,
    defaultValue: true,

    },
    CreatedDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
  }, {
    timestamps: false, // Disable createdAt and updatedAt fields
  

 } );
    
    return Department;
    }
    