const router = require('express').Router();
tense = require('./tenses.model');

router.get('/', (req, res) => {
	tense
		.find()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/presentIndicative', (req, res) => {
	tense
		.findIndicativePresent()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/pastIndicative', (req, res) => {
	tense
		.findIndicativePast()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

module.exports = router;
