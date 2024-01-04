// ./app/controllers/project.controller.js

const projectService = require('../services/index.service');
const userService = require('../../user/services/index.service');

const getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProjectById = async (req, res) => {
  const projectId = req.params.id;

  try {
    const project = await projectService.getProjectById(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProjectByIdForAUser = async (req, res) => {
  const projectId = req.params.id;
  const userId = req.params.userId;
  try {
    const project = await projectService.getProjectById(projectId);
    const user = await userService.getUserById(userId)

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    } else if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else if (user.user_id !== project.project_id) {
      return res.status(404).json({ error: 'Project not owned by User' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createProject = async (req, res) => { 
  const projectData = req.body;

  try {
    const newProject = await projectService.createProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', error: error });
  }
};

const updateProject = async (req, res) => {
  const projectId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedProject = await projectService.updateProject(projectId, updatedData);

    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteProject = async (req, res) => {
  const projectId = req.params.id;

  try {
    const deletedProject = await projectService.deleteProject(projectId);

    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProjectsByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const project = await projectService.getAllProjectsByUserId(userId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  getProjectByIdForAUser,
  createProject,
  updateProject,
  deleteProject,
  getProjectsByUserId,
};
