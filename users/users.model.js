const db = require('../data/db-config.js');

function addUser(user) {
	return db('users').insert(user);
}

function findUser(username) {
	return db('users').where({ username });
}

function findById(id) {
	return db('users')
		.where({ id })
		.first();
}

async function updatePoints(id, points) {
	let user = await db('users')
		.where({ id })
		.first();

	const { correct, incorrect, total } = points;

	if (correct > 0)
		await db('users')
			.where({ id })
			.update({ correct: user.correct + correct });

	if (incorrect > 0)
		await db('users')
			.where({ id })
			.update({ incorrect: user.incorrect + incorrect });

	await db('users')
		.where({ id })
		.update({ total: user.total + total });

	return await db('users')
		.where({ id })
		.first();
}

module.exports = {
	addUser,
	findUser,
	findById,
	updatePoints
};
