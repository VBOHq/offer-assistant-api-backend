// ./database.js

const { Sequelize } = require('sequelize');

// Replace 'your_database', 'your_username', 'your_password' with your actual MySQL database credentials
const sequelize = new Sequelize('vbo_offer_assistant', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
