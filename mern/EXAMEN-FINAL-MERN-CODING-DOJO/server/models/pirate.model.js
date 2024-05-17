const mongoose = require('mongoose');

const pirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: [true, 'Pirate name is required'],
        minlength: [3, 'Pirate name must be at least 3 characters long']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
    },
    crewPosition: {
        type: String,
        required: [true, 'Crew position is required']
    },
    pegLeg: {
        type: Boolean,
        required: [true, 'Peg leg is required']
    },
    eyePatch: {
        type: Boolean,
        required: [true, 'Eye patch is required']
    },
    hookHand: {
        type: Boolean,
        required: [true, 'Hook hand is required']
    },
    catchPhrase: {
        type: String,
        required: [true, 'Catch phrase is required'],
        minlength: [3, 'Catch phrase must be at least 3 characters long']
    },
    numberOfTreasureChests: {
        type: Number,
        required: [true, 'Number of treasure chests is required']
    }
});

const Pirate = mongoose.model('Pirate', pirateSchema);

module.exports = Pirate;