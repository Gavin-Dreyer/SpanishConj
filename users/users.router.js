const router = require('express').Router();
users = require('./users.model');

router.post('/', (req, res) => {
	let { username, password } = req.body;

	if (!username || !password) {
		res.status(400).json({ message: 'Please provide a username and password' });
		return;
	}

	users
		.addUser(req.body)
		.then(response => {
			res.status(201).json({ message: 'Successfully created account' });
		})
		.catch(err => {
			res.status(400).json({ message: 'Error when creating account' }, err);
		});
});

module.exports = router;
