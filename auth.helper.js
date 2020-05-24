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

function authenticate(req, res, next) {
	const token = req.get('Authorization');
	if (token) {
		jwt.verify(token, secrets, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Invalid token' });
			} else {
				next();
			}
		});
	} else {
		res.status(400).json({ message: 'no credentials provided' });
	}
}

module.exports = { generateToken, authenticate };
