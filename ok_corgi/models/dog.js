// Dog model w/ Mongoose
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var dogSchema = new mongoose.Schema({
    name: String,
});

mongoose.model('Dog', dogschema);

module.exports = mongoose.model('Dog', dogSchema);

