exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl.string("recipe_name", 255).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("ingredient_name", 255).notNullable();
    })
    .createTable("recipes_ingredients", tbl => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist("recipes_ingredients")
    .dropTableIfExist("ingredients")
    .dropTableIfExist("recipes");
};
