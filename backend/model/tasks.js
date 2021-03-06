let mongoose = require('mongoose')

// Task Schema
let taskSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  start_date:{
    type: String,
    required: true
  },
  end_date:{
    type: String,
    required: true
  },
  hours_spend : {
    type:Number,
    default:0
  },
  completed:{
    type:Boolean
  },
  hashtag:{
    type:String,
    required:true
  }
});

taskSchema.virtual('taskId').get(function() {
  return this._id;
});

const Task = mongoose.model('Task', taskSchema);
module.exports.Task = Task;