const db = require("../data/db-config.js");

module.exports = {
  find,
  findInstructions,
  addInstruction,
  findShoppingList
};

function find() {
  return db("recipes");
}

function findInstructions(id) {
  return db("instructions").where({ recipe_id: id });
}

function addInstruction(instructionData, id) {
  return db("instructions")
    .innerJoin("recipes", "instructions.recipe_id", "=", "recipes.id")
    .where({ recipe_id: id })
    .insert(instructionData);
}

function findShoppingList(id) {
  return db("shopping_list")
    .innerJoin("ingredients", "shopping_list.ingredient_id", "ingredients.id")
    .select("ingredients.name", "shopping_list.quantity")
    .where({ id: id });
}
