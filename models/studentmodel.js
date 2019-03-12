var mongoose = require('mongoose');
// Book Schema
var StudentSchema = mongoose.Schema({
  stdid: {
    type:String,
    unique:true
  },
  stdname: {type:String}
});

var Projects = module.exports = mongoose.model('students', StudentSchema);