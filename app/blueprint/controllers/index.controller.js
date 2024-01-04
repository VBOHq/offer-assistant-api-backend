// ./app/controllers/index.controller.js

const BlueprintService = require('../services/index.service');

const getAllBlueprints = async (req, res) => {
  try {
    const blueprints = await BlueprintService.getAllBlueprints();
    res.json(blueprints);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getBlueprintById = async (req, res) => {
  const BlueprintId = req.params.id;
  try {
    const Blueprint = await BlueprintService.getBlueprintById(BlueprintId);
    if (!Blueprint) {
      return res.status(404).json({ error: 'Blueprint not found' });
    }
    res.json(Blueprint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createBlueprint = async (req, res) => {
  const BlueprintData = req.body;

  try {
    const newBlueprint = await BlueprintService.createBlueprint(BlueprintData);
    res.status(201).json(newBlueprint);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', body: error });
  }
};

const updateBlueprint = async (req, res) => {
  const BlueprintId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedBlueprint = await BlueprintService.updateBlueprint(BlueprintId, updatedData);

    if (!updatedBlueprint) {
      return res.status(404).json({ error: 'Blueprint not found' });
    }

    res.json(updatedBlueprint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', body: error });
  }
};

const deleteBlueprint = async (req, res) => {
  const BlueprintId = req.params.id;

  try {
    const deletedBlueprint = await BlueprintService.deleteBlueprint(BlueprintId);

    if (!deletedBlueprint) {
      return res.status(404).json({ error: 'Blueprint not found' });
    }

    res.json({ message: 'Blueprint deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllBlueprintsByProjectId = async (req, res) => {
  const projectId = req.params.projectId;

  try {
    const blueprints = await BlueprintService.getAllBlueprintsByProjectId(projectId);
    res.json(blueprints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllBlueprints,
  getBlueprintById,
  createBlueprint,
  updateBlueprint,
  deleteBlueprint,
  getAllBlueprintsByProjectId,
};
