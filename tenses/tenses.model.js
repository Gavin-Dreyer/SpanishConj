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

function findIndicativePastImperfect() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Indicativo')
		.where('tense', 'Imperfecto');
}

function findIndicativePerfectPresent() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Indicativo')
		.where('tense', 'Presente perfecto');
}

function findIndicativeFuturo() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Indicativo')
		.where('tense', 'Futuro');
}
module.exports = {
	find,
	findIndicativePresent,
	findIndicativePast,
	findIndicativePastImperfect,
	findIndicativePerfectPresent,
	findIndicativeFuturo
};
