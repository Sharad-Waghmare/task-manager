const express = require('express');
const { getTask, getAddTask, getUpdateTask, getDeleteTask, getSingleTask } = require('../controller/taskController');

const router = express.Router();

router.get('/allTask', getTask);
router.post('/addTask', getAddTask);
router.get('/singleTask/:task_id', getSingleTask)
router.put('/updateTask/:task_id', getUpdateTask);
router.delete('/deleteTask/:task_id', getDeleteTask);

module.exports = router;