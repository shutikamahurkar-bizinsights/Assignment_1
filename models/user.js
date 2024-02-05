
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
      allowNull: false,   
      unique: true
    },
  status :{
  type: DataTypes.BOOLEAN,
  defaultValue: true,
  },
    
    }, {
      timestamps: false, // Disable createdAt and updatedAt fields
    });
  
    return User;
  };