const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize('masters', 'root', 'Shrutika@1995', {
    host: '127.0.0.1',
    logging: false,
    port: 3306,
    //dialect = db to be used
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    
  });

  
  try {
     sequelize.authenticate();
     console.log();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db={};
  db.Sequelize=Sequelize;
  db.sequelize=sequelize;
  db.department = require('./department')(sequelize, DataTypes);
  db.designation = require('./designation')(sequelize, DataTypes);
  db.user = require('./user')(sequelize, DataTypes);
  db.holiday = require('./holiday')(sequelize, DataTypes);
  db.project = require('./project')(sequelize, DataTypes);
  db.shift = require('./shift')(sequelize, DataTypes);


 
//creates the table, dropping it first if it already existed
 // db.sequelize.sync({force:false});

db.designation.sync({ force: false });
 db.department.sync({ force: false });
 db.user.sync({ force: false });
 db.holiday.sync({force: false});
 db.project.sync({force: false});
 db.shift.sync({force: false});

//console.log("The table for the User model was just (re)created!");
 
  console.log("All models were synchronized successfully.");
  console.log();
  console.log('=================================');

  module.exports = db;  

