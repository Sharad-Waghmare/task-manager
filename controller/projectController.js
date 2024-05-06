const projectModel = require("../model/projectModel")

const getAllProject = async (req, res) =>{
    try {
        
        const allData = await projectModel.find();

        if(allData){
            return res.status(200).json({
                data: allData,
                message: "All project"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
};


const getCreateProject = async (req, res) =>{
    try {
        const {name, leader, projectType} = req.body;

        const addProject = new projectModel({
            name:name,
            leader: leader,
            projectType: projectType,
        })

        await addProject.save();
        
        if(addProject){
            return res.status(201).json({
                data: addProject,
                message: "Add project"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
};

const getSingleProject = async (req, res) =>{
    try {
        const id = req.params.project_id;

        const singleData = await projectModel.findOne({_id: id});

        if(singleData){
            return res.status(200).json({
                data: singleData,
                message: 'single data'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const getUpdateProject = async (req, res) =>{
    try {
        const id = req.params.project_id;

        const {name, leader, projectType} = req.body;



        const updateProject = await projectModel.updateOne({_id: id}, {
            $set:{
                name: name,
                leader: leader,
                projectType: projectType
            }
        });

        if(updateProject.acknowledged){
            return res.status(201).json({
                data: updateProject,
                message: "update"
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
};

const getDeleteProject = async (req, res) =>{
    try {
        const id = req.params.project_id;

        const deleteProject = await projectModel.deleteOne({_id: id});

        if(deleteProject.acknowledged){
            return res.status(200).json({
                data: deleteProject,
                message: "delete"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
module.exports = {
    getAllProject,
    getCreateProject,
    getSingleProject,
    getUpdateProject,
    getDeleteProject,
}