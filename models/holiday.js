
module.exports=(sequelize, DataTypes)=>{
    const Holiday = sequelize.define('holidays', {
      // Model attributes are defined here
      holidayId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      holidayName: {
        type: DataTypes.STRING,
        allowNull: false,   
        unique: true
      },
    
     holidayDate: {
      type: DataTypes.DATE,
      
    },
    status :{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    
        },
  }, {
    timestamps: false, // Disable createdAt and updatedAt fields
  

 } );
    
    return Holiday;
    }
    