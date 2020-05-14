const router = require('express').Router();
const { authenticate } = require('../auth.helper.js');
tense = require('./tenses.model');

router.get('/', authenticate, (req, res) => {
	tense
		.find()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/Indicativepresent', (req, res) => {
	tense
		.findIndicativePresent()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/Indicativepast', (req, res) => {
	tense
		.findIndicativePast()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/pastImperfectIndicative', (req, res) => {
	tense
		.findIndicativePastImperfect()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/perfectPresentIndicative', (req, res) => {
	tense
		.findIndicativePerfectPresent()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/futureIndicative', (req, res) => {
	tense
		.findIndicativeFuturo()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/presentSubjunctive', (req, res) => {
	tense
		.findSubjunctivePresent()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/pastImperfectSubjunctive', (req, res) => {
	tense
		.findSubjunctivePastImperfect()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/perfectPresentSubjunctive', (req, res) => {
	tense
		.findSubjunctivePerfectPresent()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

router.get('/futureSubjunctive', (req, res) => {
	tense
		.findSubjunctiveFuturo()
		.then(verbs => {
			res.status(200).json(verbs);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get verbs' });
		});
});

module.exports = router;
