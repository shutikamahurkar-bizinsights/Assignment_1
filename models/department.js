
module.exports=(sequelize, DataTypes)=>{
    const Department = sequelize.define('departments', {
     
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
        unique: true,
       
      },
    status :{
    type: DataTypes.BOOLEAN,
    defaultValue: true,

    },
  }, {
    timestamps: false, 
  

 } );
    
    return Department;
    }
    