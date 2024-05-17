const {default: mongoose} = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    }
}, {timestamps: true, versionKey: false});

const Author = new mongoose.model("Author", AuthorSchema);

module.exports = Author;    
