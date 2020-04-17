const db = require('../data/db-config.js');

function addUser(user) {
	return db('users').insert(user);
}

module.exports = {
	addUser
};
