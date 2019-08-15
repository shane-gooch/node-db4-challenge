const express = require("express");
const helmet = require("helmet");

const RecipeRouter = require("./recipes/RecipeRouter.js");
const IngredientRouter = require("./ingredients/ingredientRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(function(req, res) {
  res.status(404).send("<h1>Invalid URL</h1>");
});

server.use("/api/recipes", RecipeRouter);
server.use("/api/ingredients", IngredientRouter);

module.exports = server;
