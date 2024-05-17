const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/author.controller');

router.post('/', AuthorController.createAuthor);
router.get('/', AuthorController.getAuthor);
router.get('/:id', AuthorController.getAuthorById);
router.put('/:id', AuthorController.updateAuthor);
router.delete('/:id', AuthorController.deleteAuthor);

module.exports = router;
