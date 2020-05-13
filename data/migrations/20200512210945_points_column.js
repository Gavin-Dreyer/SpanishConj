exports.up = function(knex) {
	return knex.schema.table('users', function(table) {
		table.integer('correct');
		table.integer('incorrect');
		table.integer('total');
	});
};

exports.down = function(knex) {
	return knex.schema.table('users', function(table) {
		table.dropColumn('total');
		table.dropColumn('incorrect');
		table.dropColumn('correct');
	});
};
