const router = require('express').Router();
words = require('./words.model');

router.post('/', (req, res) => {
	let word = req.body.word;

	words
		.findWord(word)
		.then(word => {
			res.status(200).json(word);
		})
		.catch(err => console.log(err));
});

module.exports = router;
