var mongoose = require('mongoose');

var technoSchema = new mongoose.Schema({
    name: String,
    description: String,
    picture: String,
    link: String,

});

var Techno = mongoose.model('Techno', technoSchema);

module.exports = Techno; 