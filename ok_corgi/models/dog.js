// Dog model w/ Mongoose
var mongoose = require ('mongoose');
// var dogSchema = mongoose.Schema;

var dogSchema = new mongoose.Schema({
    name: String,
    url: String
});



module.exports = mongoose.model('Dog', dogSchema);