const express = require("express");
const router = express.Router();
const PetController = require("../controllers/pet.controllers");

router.get("/", PetController.findAllPets);
router.post("/", PetController.createPet);
router.get("/:id", PetController.findOnePet);
router.put("/:id", PetController.updatePet);
router.delete("/:id", PetController.deletePet);

module.exports = router;