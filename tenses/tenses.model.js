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

function findSubjunctivePresent() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Subjuntivo')
		.where('tense', 'Presente');
}

function findSubjunctivePast() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Subjuntivo')
		.where('tense', 'Pretérito');
}

function findSubjunctivePastImperfect() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Subjuntivo')
		.where('tense', 'Imperfecto');
}

function findSubjunctivePerfectPresent() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Subjuntivo')
		.where('tense', 'Presente perfecto');
}

function findSubjunctiveFuturo() {
	return db
		.select('*')
		.from('verbs')
		.where('mood', 'Subjuntivo')
		.where('tense', 'Futuro');
}
module.exports = {
	find,
	findIndicativePresent,
	findIndicativePast,
	findIndicativePastImperfect,
	findIndicativePerfectPresent,
	findIndicativeFuturo,
	findSubjunctivePresent,
	findSubjunctivePastImperfect,
	findSubjunctivePerfectPresent,
	findSubjunctiveFuturo
};
