// ./app/services/project.service.js

const Project = require('../models/index.model');
const User = require('../../user/models/index.model');

const getAllProjects = async () => {
  return await Project.findAll();
};

const getProjectById = async (projectId) => {
  return await Project.findByPk(projectId);
};

// const getProjectByIdAndUserId = async (project_id, user_id) => {
//   return await Project.findOne({where: {
//     project_id: project_id,
//     user_id: user_id
//   }, limit:1});
// };

const createProject = async (projectData) => {
  return await Project.create(projectData);
};

const updateProject = async (projectId, updatedData) => {
  const project = await Project.findByPk(projectId);

  if (!project) {
    return null; // Project not found
  }

  return await project.update(updatedData);
};

const deleteProject = async (projectId) => {
  const project = await Project.findByPk(projectId);

  if (!project) {
    return null; // Project not found
  }

  await project.destroy();
  return project;
};


const getAllProjectsByUserId = async (userId) => {
  user = await User.findByPk(userId)
  if (!user) {
    return null;
  }
  return await Project.findAll({
    where: {user_id: userId}
  });
};

module.exports = {
  getAllProjects,
  getProjectById,
  // getProjectByIdAndUserId,
  createProject,
  updateProject,
  deleteProject,
  getAllProjectsByUserId,
};
