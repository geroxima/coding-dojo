const express = require('express');
const router = express.Router();

const pirateController = require('../controllers/pirate.controller');

router.get('/', pirateController.getAll);
router.get('/:id', pirateController.getById);
router.post('/', pirateController.create);
router.put('/:id', pirateController.updateById);
router.delete('/:id', pirateController.deleteById);

module.exports = router;
