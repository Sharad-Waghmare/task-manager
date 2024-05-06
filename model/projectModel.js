const mongoose = require('mongoose');

const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: { 
        type: String, 
    },
    leader: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',  
    },
    projectType: { type: String },

});

const projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;
