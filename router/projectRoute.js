const express = require('express');
const { getAllProject, getCreateProject, getUpdateProject, getDeleteProject, getSingleProject } = require('../controller/projectController');

const router = express.Router();

router.get('/allproject', getAllProject);
router.post('/addproject', getCreateProject);
router.get('/singleProject/:project_id', getSingleProject)
router.put('/updateProject/:project_id', getUpdateProject);
router.delete('/deleteProject/:project_id', getDeleteProject);

module.exports = router;