const Joke = require("../models/joke.model");

const JokeController = {
    create: async (req, res) => {
        try { 
            const newJoke = await Joke.create(req.body);
            res.status(200).json(newJoke);
        } catch (err) {
            res.status(500).json({ message: "Something went wrong", error: err });
        }
    },

    getAll: async (req, res) => {
        try {
            const allJokes = await Joke.find();
            res.status(200).json(allJokes);
        } catch (err) {
            res.status(500).json({ message: "Something went wrong", error: err });
        }
    },

    getOne: async (req, res) => {
        try {
            const oneJoke = await Joke.findById(req.params.id);
            res.status(200).json(oneJoke);
        } catch (err) {
            res.status(500).json({ message: "Something went wrong", error: err });
        }
    },

    update: async (req, res) => {
        try {
            const updatedJoke = await Joke.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json(updatedJoke);
        } catch (err) {
            res.status(500).json({ message: "Something went wrong", error: err });
        }
    },

    delete: async (req, res) => {
        try {
            const deletedJoke = await Joke.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedJoke);
        } catch (err) {
            res.status(500).json({ message: "Something went wrong", error: err });
        }
    },

    random: async (req, res) => {
        try {
            const count = await Joke.countDocuments();
            const random = Math.floor(Math.random() * count);
            const randomJoke = await Joke.findOne().skip(random);
            res.status(200).json(randomJoke);
        } catch (err) {
            res.status(500).json({ message: "Something went wrong", error: err });
        }
    }

}

module.exports = JokeController;