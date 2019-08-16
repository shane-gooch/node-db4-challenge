const express = require("express");
const helmet = require("helmet");

const RecipeRouter = require("./recipes/recipe-router.js");
const IngredientRouter = require("./ingredients/ingredient-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
// server.use(function(req, res) {
//   res.status(404).send("<h1>Invalid URL</h1>");
// });

server.use("/api/recipes", RecipeRouter);
server.use("/api/ingredients", IngredientRouter);

module.exports = server;
