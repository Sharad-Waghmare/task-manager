const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
   },
  description: { 
    type: String 
  },
  assignee: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
  
  },
  dueDate: { 
    type: Date, 
    required: true 
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high'], 
    default: 'medium' 
  },
  status: { 
    type: String, 
    enum: ['pending', 'in progress', 'completed'], 
    default: 'pending' 
  },

  subtasks: [{
    name: { 
      type: String, 
      
    },
    completed: { 
      type: String, 
      default: false 
    }
  }],

  projectId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project', 
    
  }
});

const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;
