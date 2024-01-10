
module.exports=(sequelize, DataTypes)=>{
    const User = sequelize.define('users', {
    
    UserId:{
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
     unique: true
    },
   
    FirstName:{
     type: DataTypes.STRING,
     allowNull: false,
    },
     
    DesignationId:{
    type: DataTypes.INTEGER, 
    allowNull: false,  
    },

    DepartmentId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    },

    EmailId:{
     type: DataTypes.STRING,
     allowNull: false,
     unique: true
    },

    Password:{
     type: DataTypes.STRING,
     allowNull: false,
    },
   
    IsEmailVerified:{
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
    },
   
    CreatedDate:{
    type: DataTypes.DATE,
    allowNull: false,
    },

    UserType: {
    type:   DataTypes.ENUM,
    values: ['admin', 'hr', 'employee'],
    allowNull: false,
    },

    UpdatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
      },
    }, {
      timestamps: false, // Disable createdAt and updatedAt fields
    });
  
    return User;
  };