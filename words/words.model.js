const db = require('../data/db-config.js');

function findWord(word) {
	return db('verbs')
		.select('*')
		.where('spanishVerb', word);
}

module.exports = {
	findWord
};
