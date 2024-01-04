// ./app/user/routes/index.routes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/index.controller');

module.exports = (app) => {
  // Registration and login routes
  router.post('/register', UserController.registerUser);
  router.post('/login', UserController.loginUser);

  // Protected routes (require authentication middleware)
  router.use(require('../middlewares/auth.middleware'));

  // Profile routes
  router.get('/profile', UserController.getUserProfile);
  router.put('/profile', UserController.updateUserProfile);
  router.delete('/profile', UserController.deleteUserProfile);

  app.use('/api/user', router);
};
