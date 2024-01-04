// ./app/services/Blueprint.service.js

const BlueprintModel = require('../models/index.model');

const getAllBlueprints = async () => {
  return await BlueprintModel.findAll();
};

const getBlueprintById = async (BlueprintId) => {
  return await BlueprintModel.findByPk(BlueprintId);
};

const createBlueprint = async (BlueprintData) => {
  return await BlueprintModel.create(BlueprintData);
};

const updateBlueprint = async (BlueprintId, updatedData) => {
  console.log(BlueprintId);
  console.log(updatedData);
  const blueprintInstance = await BlueprintModel.findByPk(BlueprintId);

  if (!blueprintInstance) {
    return null; // Blueprint not found
  }

  return await blueprintInstance.update(updatedData);
};

const deleteBlueprint = async (BlueprintId) => {
  const blueprintInstance = await BlueprintModel.findByPk(BlueprintId);

  if (!blueprintInstance) {
    return null; // Blueprint not found
  }

  await blueprintInstance.destroy();
  return blueprintInstance;
};

const getAllBlueprintsByProjectId = async (projectId) => {
  return await BlueprintModel.findAll({
    where: { project_id: projectId },
  });
};

module.exports = {
  getAllBlueprints,
  getBlueprintById,
  createBlueprint,
  updateBlueprint,
  deleteBlueprint,
  getAllBlueprintsByProjectId,
};
