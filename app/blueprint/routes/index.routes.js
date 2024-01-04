const express = require('express');
const router = express.Router();
const blueprintController = require('../controllers/index.controller');
module.exports = (app) => {
    // Competitor routes
    router.get('/', blueprintController.getAllBlueprints);
    router.get('/:id', blueprintController.getBlueprintById);
    router.post('/', blueprintController.createBlueprint);
    router.put('/:id', blueprintController.updateBlueprint);
    router.delete('/:id', blueprintController.deleteBlueprint);

    router.get('/project/:projectId', blueprintController.getAllBlueprintsByProjectId);

    // 
    app.use('/api/blueprint', router);
};