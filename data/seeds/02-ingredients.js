exports.seed = function(knex) {
  return knex("ingredients").insert([
    { ingredient_name: "ing 1" },
    { ingredient_name: "ing 2" },
    { ingredient_name: "ing 3" }
  ]);
};
