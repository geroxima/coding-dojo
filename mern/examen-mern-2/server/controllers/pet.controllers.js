const Pet = require("../models/pet.model");

module.exports.createPet = async (req, res) => {
    try {
        const newPet = await Pet.create(req.body);
        res.status(201);
        res.json(newPet);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

module.exports.findAllPets = async (req, res) => {
    try {
        const allPets = await Pet.find().sort({petType: 1});
        res.status(200).json(allPets);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.findOnePet = async (req, res) => {
    try {
        const onePet = await Pet.findById(req.params.id);
        res.status(200).json(onePet);
    } catch (err) {
        res.status(400).res.json(err);
    }
}

module.exports.updatePet = async (req, res) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        res.status(200);
        res.json(updatedPet);
    } catch(error) {
        res.status(400);
        res.json(error);
    }
}

module.exports.deletePet = async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.id);
        res.status(200);
        res.json(deletedPet);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}