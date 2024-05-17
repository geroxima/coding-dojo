const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.status(201);
            res.json(newAuthor);
        })
        .catch(error => {
            res.status(500).json({message: error.message});
        });
};

module.exports.getAuthor = (req, res) => {
    Author.find()
        .then(author => {
            res.status(200);
            res.json(author);
        })
        .catch(error => {
            res.status(500).json({message: error.message});
        });
};

module.exports.getAuthorById = (req, res) => {
    const {id} = req.params;
    Author.findOne({_id: id})
        .then(author => {
            res.status(200);
            res.json(author);
        })
        .catch(error => {
            res.status(500).json({message: error.message});
        });
};

module.exports.updateAuthor = (req, res) => {
    const {id} = req.params;
    Author.findOneAndUpdate({_id: id}, req.body, {new: true})
        .then(updatedAuthor => {
            res.status(200);
            res.json(updatedAuthor);
        })
        .catch(error => {
            res.status(500).json({message: error.message});
        });
};

module.exports.deleteAuthor = (req, res) => {
    const {id} = req.params;
    Author.deleteOne({_id: id})
        .then(deleteAuthor => {
            res.status(200);
            res.json(deleteAuthor);
        })
        .catch(error => {
            res.status(500).json({message: error.message});
        });
};