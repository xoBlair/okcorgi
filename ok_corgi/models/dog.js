// Dog model w/ Mongoose
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var dogSchema = new Schema({
    name: String,
    
});


module.exports = mongoose.model('Dog', dogSchema);