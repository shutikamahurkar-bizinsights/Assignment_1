
module.exports=(sequelize, DataTypes)=>{
    const Shift = sequelize.define('shifts', {
      // Model attributes are defined here
      shiftId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      shiftName: {
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
    
    return Shift;
    }
    