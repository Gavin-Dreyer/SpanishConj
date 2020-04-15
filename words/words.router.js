const router = require('express').Router();
words = require('./words.model');

router.get('/reflexive', (req, res) => {
	words
		.findReflexiveVerbs()
		.then(words => {
			res.status(200).json(words);
		})
		.catch(err => console.log(err));
});

router.post('/', (req, res) => {
	words
		.findWord(req.body.word)
		.then(word => {
			res.status(200).json(word);
		})
		.catch(err => console.log(err));
});

module.exports = router;
