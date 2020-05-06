const jwt = require('jsonwebtoken');
const secrets = process.env.JWT_SECRET;

const generateToken = user => {
	const payload = {
		id: user.id
	};

	const options = {
		expiresIn: '1d'
	};

	return jwt.sign(payload, secrets, options);
};

module.exports = { generateToken };
