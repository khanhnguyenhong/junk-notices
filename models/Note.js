var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    name: String,
    type: String,
    content: String,
    days: [String]
});

mongoose.model('Note', NoteSchema);