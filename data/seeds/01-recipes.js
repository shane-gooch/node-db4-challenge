exports.seed = function(knex) {
  return knex("recipes").insert([
    { recipe_name: "Recipe 1" },
    { recipe_name: "Recipe 2" },
    { recipe_name: "Recipe 3" }
  ]);
};
