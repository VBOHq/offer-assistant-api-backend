// Import necessary libraries
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Get the secret key from environment variables
const secretKey = process.env.SECRET_KEY;

// Function to generate a JWT token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' }); // Adjust the expiration time as needed
  return token;
};

module.exports = {
    generateToken
};
