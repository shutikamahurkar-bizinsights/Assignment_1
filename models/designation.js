
module.exports=(sequelize, DataTypes)=>{
  const Designation = sequelize.define('designation', {
    // Model attributes are defined here
    DesignationId : {
      type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    DesignationName: {
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
  
  return Designation;
  }
  