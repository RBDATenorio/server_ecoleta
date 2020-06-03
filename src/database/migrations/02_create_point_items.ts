import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('point_items', table => {
        // unic id, it is our table's primary key 
        table.increments('id').primary();
        // creating strangers keys
        table.integer('point_id').notNullable()
                                .references('id')
                                .inTable('points');

        table.integer('item_id').notNullable()
                                .references('id')
                                .inTable('items');

    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('point_items');
}
