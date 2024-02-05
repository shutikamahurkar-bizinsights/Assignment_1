
module.exports=(sequelize, DataTypes)=>{
    const Project = sequelize.define('projects', {
      // Model attributes are defined here
      projectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      projectName: {
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
    
    return Project;
    }
    