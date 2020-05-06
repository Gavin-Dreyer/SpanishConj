const db = require('../data/db-config.js');

function addUser(user) {
	return db('users').insert(user);
}

function findUser(username) {
	return db('users').where({ username });
}

module.exports = {
	addUser,
	findUser
};
