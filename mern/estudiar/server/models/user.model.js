const {default: mongoose} = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLenght: [3, "Name must be at least 3 characters long"]
    },

    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLenght: [3, "Last name must be at least 6 characters long"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        minLenght: [6, "Email must be at least 6 characters long"]
    },
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;