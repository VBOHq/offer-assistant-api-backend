// ./app/routes/project.routes.js

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/index.controller');

module.exports = (app) => {
  // List all projects
  router.get('/', projectController.getAllProjects);

  // Get a project by ID
  router.get('/:id', projectController.getProjectById);

  // Get a project by ID
  router.get('/:id/user/:userId', projectController.getProjectByIdForAUser);

  // Create a new project
  router.post('/', projectController.createProject);

  // Update a project by ID
  router.put('/:id', projectController.updateProject);

  // Delete a project by ID
  router.delete('/:id', projectController.deleteProject);

  // Get a project by ID
  router.get('/user/:userId', projectController.getProjectsByUserId);

  app.use('/api/project', router);
};