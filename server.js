const express = require('express');

const db = require('./data/db-config.js')

const server = express();

server.use(express.json());

function find() {
    return db.select('*').from('verbs');
	// return db('verbs');
}


server.get('/', (req, res) => {
	find()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

module.exports = server;