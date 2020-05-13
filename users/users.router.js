const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { generateToken } = require('../auth.helper.js');
users = require('./users.model');

router.post('/', async (req, res) => {
	try {
		let { username, password } = req.body;

		if (!username || !password) {
			res
				.status(400)
				.json({ message: 'Please provide a username and password' });
		}

		const hash = bcrypt.hashSync(password, 10);
		password = hash;

		const isUniqueUsername = await users.findUser(username);

		if (isUniqueUsername.length === 0) {
			await users.addUser({ username, password });

			const user = await users.findUser(username);

			const token = await generateToken(user[0]);

			res.status(201).json({ message: 'Successfully created account', token });
		} else {
			res.status(403).json({ message: 'Username already exists' });
		}
	} catch (err) {
		res.status(500).json({ message: 'Error when creating account', err });
	}
});

router.post('/login', async (req, res) => {
	try {
		let { username, password } = req.body;

		if (!username || !password) {
			res
				.status(400)
				.json({ message: 'Please provide a username and password' });
		}

		const foundUser = await users.findUser(username);

		if (
			foundUser.length > 0 &&
			bcrypt.compareSync(password, foundUser[0].password)
		) {
			const token = generateToken(foundUser[0]);
			const id = foundUser[0].id;
			const user = foundUser[0].username;
			res.status(201).json({ id, user, token });
		} else {
			res.status(401).json({ message: 'Invalid credentials' });
		}
	} catch (err) {
		res.status(400).json({ message: 'Error when logging in' }, err);
	}
});

module.exports = router;
