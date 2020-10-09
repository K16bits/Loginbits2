exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
       table.increments('id');
       table.string('nome').notNullable();
       table.decimal('idade').notNullable();
       table.string('empresa').notNullable();
       table.string('funcao').notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
