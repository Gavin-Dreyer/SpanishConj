const db = require('../data/db-config.js');

function find() {
	return db.select('*').from('verbs');
}

async function findTenses(tenses) {
	let verbs = [];

	for (let i = 0; i < tenses.length; i++) {
		let tense = tenses[i];
		let t = await db
			.select('*')
			.from('verbs')
			.where({ tense })
			.where('mood', 'Indicativo');

		verbs = [...verbs, ...t];
	}

	return verbs.map(verb => {
		Object.keys(verb).forEach(k => {
			if (verb[k] === null) {
				delete verb[k];
			}
		});

		return verb;
	});
}

async function findIndicativePresent() {
	let verbs = await db
		.select('*')
		.from('verbs')
		.where('mood', 'Indicativo')
		.where('tense', 'Presente');

	return verbs.map(verb => {
		Object.keys(verb).forEach(k => {
			if (verb[k] === null) {
				delete verb[k];
			}
		});

		return verb;
	});
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
	findTenses,
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
