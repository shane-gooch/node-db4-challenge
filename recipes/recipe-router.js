const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Error connecting to databas" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Recipes.findInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching instructions from database" });
    });
});

router.post("/:id/instructions", (req, res) => {
  const { id } = req.params;
  const instructionData = req.body;

  Recipes.addInstruction(instructionData, id)
    .then(instruction => {
      res.status(201).json(instruction);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding to database" });
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  const { id } = req.params;

  Recipes.findShoppingList(id)
    .then(list => {
      res.status(200).json(list);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching from database" });
    });
});

module.exports = router;
