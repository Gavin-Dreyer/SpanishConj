const db = require('../data/db-config.js');

function find() {
	return db.select('*').from('verbs');
}

function findIndicativePresent() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Indicativo')
		.where('tense', 'Presente');
}

function findIndicativePast() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Indicativo')
		.where('tense', 'Pretérito');
}

module.exports = {
	find,
	findIndicativePresent,
	findIndicativePast
};
