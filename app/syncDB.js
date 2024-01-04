// ./syncDB.js

const sequelize = require('./database');

// Synchronize the models with the database
const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

syncDB();






