const express = require("express");
const router = express.Router();
const JokeController = require("../controllers/jokes.controller");

router.get("/", JokeController.getAll);
router.get("/random", JokeController.random);
router.get("/:id", JokeController.getOne);
router.post("/new", JokeController.create);
router.put("/update/:id", JokeController.update);
router.delete("/delete/:id", JokeController.delete);

module.exports = router;