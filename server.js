const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

const tenseRouter = require('./tenses/tenses.router');
const wordsRouter = require('./words/words.router');
const userRouter = require('./users/users.router');

server.use('/api/tense', tenseRouter);
server.use('/api/words', wordsRouter);
server.use('/api/user', userRouter);

module.exports = server;
