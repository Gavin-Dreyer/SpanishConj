exports.up = function(knex) {
	return knex.schema
		.table('verbs', function(table) {
			table.dropColumn('spanishVerb');
			table.dropColumn('mood');
			table.dropColumn('tense');
			table.dropColumn('englishDefinition');
			table.dropColumn('firstPersonSingular');
			table.dropColumn('secondPersonSingular');
			table.dropColumn('thirdPersonSingular');
			table.dropColumn('firstPersonPlural');
			table.dropColumn('secondPersonPlural');
			table.dropColumn('thirdPersonPlural');
		})
		.table('verbs', function(table) {
			table.string('spanishVerb').defaultTo('');
			table.string('mood').defaultTo('');
			table.string('tense').defaultTo('');
			table.string('englishDefinition').defaultTo('');
			table.string('firstPersonSingular').defaultTo('');
			table.string('secondPersonSingular').defaultTo('');
			table.string('thirdPersonSingular').defaultTo('');
			table.string('firstPersonPlural').defaultTo('');
			table.string('secondPersonPlural').defaultTo('');
			table.string('thirdPersonPlural').defaultTo('');
		});
};

exports.down = function(knex) {
	return knex.schema
		.table('verbs', function(table) {
			table.dropColumn('spanishVerb');
			table.dropColumn('mood');
			table.dropColumn('tense');
			table.dropColumn('englishDefinition');
			table.dropColumn('firstPersonSingular');
			table.dropColumn('secondPersonSingular');
			table.dropColumn('thirdPersonSingular');
			table.dropColumn('firstPersonPlural');
			table.dropColumn('secondPersonPlural');
			table.dropColumn('thirdPersonPlural');
		})
		.table('verbs', function(table) {
			table.string('spanishVerb');
			table.string('mood');
			table.string('tense');
			table.string('englishDefinition');
			table.string('firstPersonSingular');
			table.string('secondPersonSingular');
			table.string('thirdPersonSingular');
			table.string('firstPersonPlural');
			table.string('secondPersonPlural');
			table.string('thirdPersonPlural');
		});
};
