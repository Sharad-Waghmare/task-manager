const taskModel = require("../model/taskModel")

const getTask = async (req, res) =>{
    try {
        const allTask = await taskModel.find().populate('assignee').populate('projectId');

        if(allTask){
            return res.status(200).json({
                data: allTask,
                message: 'task successful',
            });
        }
    } catch (error) {
        return es.status(500).json({
            message: error.message,
        })
    }
};


const getAddTask = async (req, res) =>{
    try {
        const {name, description, assignee, dueDate, priority, status, subtasks, projectId} = req.body;
        

        
        const createTask = new taskModel({
            name: name,
            description: description,
            assignee: assignee,
            dueDate: dueDate,
            priority: priority,
            status: status,
            subtasks: subtasks,
            projectId:projectId
        })



        await createTask.save();

        if(createTask){
            return res.status(201).json({
                data: createTask,
                message: 'add task'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
};


const getSingleTask = async (req, res) =>{
    try {
        const id = req.params.task_id;

        const singleTask = await taskModel.find({_id: id});

        if(singleTask){
            return res.status(200).json({
                data: singleTask,
                message: "single task"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

const getUpdateTask = async (req, res) =>{
    try {

        const id = req.params.task_id;

        const {name, description, assignee, dueDate, priority, status, subtasks, projectId} = req.body;
        
        // const taskData = await taskModel.findOne({_id: id});

        const updateTask = await taskModel.updateOne({_id: id},{
            $set:{
                name: name,
                description: description,
                assignee: assignee,
                dueDate: dueDate,
                priority: priority,
                status: status,
                subtasks: subtasks,
                projectId:projectId
            }
        })

        if(updateTask.acknowledged){
            return res.status(201).json({
                data: updateTask,
                message: "update task"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


const getDeleteTask = async (req, res) =>{
    try {
        const id = req.params.task_id;

        const deleteTask = await taskModel.deleteOne({_id: id});

        if(deleteTask.acknowledged){
            return res.status(200).json({
                data: deleteTask,
                message: 'Delete task'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    getTask,
    getAddTask,
    getSingleTask,
    getUpdateTask,
    getDeleteTask,
}