exports.seed = function(knex) {
  return knex("shopping_list").insert([
    { recipe_id: 1, ingredients_id: 1, quantity: 12 },
    { recipe_id: 1, ingredients_id: 2, quantity: 1 },
    { recipe_id: 1, ingredients_id: 3, quantity: 14 },
    { recipe_id: 2, ingredients_id: 3, quantity: 123 },
    { recipe_id: 2, ingredients_id: 1, quantity: 133 },
    { recipe_id: 3, ingredients_id: 3, quantity: 13 },
    { recipe_id: 3, ingredients_id: 2, quantity: 13 }
  ]);
};
