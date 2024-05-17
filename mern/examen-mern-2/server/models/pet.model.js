const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 characters long"],
        unique: [true, "Pet name must be unique"]
    },

    petType: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters long"]
    },

    petDescription: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Pet description must be at least 3 characters long"]
    },

    petSkillOne: {
        type: String,
    },

    petSkillTwo: {
        type: String,
    },

    petSkillThree: {
        type: String,
    },
})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;