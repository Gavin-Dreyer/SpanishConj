const db = require('../data/db-config.js');

function findWord(word) {
	return db('verbs')
		.select('*')
		.where('spanishVerb', word);
}

async function findReflexiveVerbs() {
	let verbs = await db('verbs').select('*');

	return verbs.filter(word => {
		if (word.spanishVerb.slice(-2) === 'se') {
			return word;
		}
	});
}

module.exports = {
	findWord,
	findReflexiveVerbs
};
