var mongoose = require('mongoose');
// Book Schema
var BookSchema = mongoose.Schema({
  isbnid: {
    type:String,
    unique:true
  },
  name: {type:String},
  author: {type:String}
});

var Projects = module.exports = mongoose.model('books', BookSchema);