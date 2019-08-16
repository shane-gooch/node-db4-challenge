const express = require("express");

const Ingredients = require("./ingredient-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Error connecting to database" });
    });
});

module.exports = router;
