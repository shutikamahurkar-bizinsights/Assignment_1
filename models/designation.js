
module.exports=(sequelize, DataTypes)=>{
  const Designation = sequelize.define('designation', {
    // Model attributes are defined here
    designationId : {
      type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    designationName: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true  
    },
  status :{
  type: DataTypes.BOOLEAN,
  defaultValue: true,
  },
  // CreatedDate: {
  //   type: DataTypes.DATE,
  //   defaultValue: DataTypes.NOW,
  //   allowNull: true,
  // },
}, {
  timestamps: false, // Disable createdAt and updatedAt fields


} );
  
  return Designation;
  }
  