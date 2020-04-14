const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

const tenseRouter = require('./tenses/tenses.router');
const wordsRouter = require('./words/words.router');

server.use('/api/tense', tenseRouter);
server.use('/api/words', wordsRouter);

module.exports = server;
