const User = require('../models/user.model');

module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(newUser => {
            res.status(201);
            res.json(newUser);
        })
        .catch(error => {
            res.status(500);
            res.json({message: error.message});
        })
}

module.exports.getAllUsers = (req, res) => {
    User.find()
        .then(user => {
            res.status(200);
            res.json(user);
        })
        .catch(error => {
            res.status(500);
            res.json({message: error.message});
        })
}

module.exports.getOneUser = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            res.status(200);
            res.json(user);
        })
        .catch(error => {
            res.status(500);
            res.json({message: error.message});
        })
}

module.exports.updateUser = (req, res) => {
    const { id } = req.params;
    User.findOneAndUpdate({_id: id}, req.body, {new: true})
        .then(updateUser => {
            res.status(200);
            res.json(updateUser);
        })
        .catch(error => {
            res.status(500);
            res.json({message: error.message});
        })
}

module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.deleteOne({_id: id})
        .then(deleteConfirmation => {
            res.status(200);
            res.json(deleteConfirmation);
        })
        .catch(error => {
            res.status(500);
            res.json({message: error.message});
        })
}