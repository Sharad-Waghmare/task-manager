const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum:['admin', 'manager', 'team member' ],
        default: 'team member'
    },
    contact:{
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;