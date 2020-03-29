const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

const tenseRouter = require('./tenses/tenses.router');

server.use('/api/tense', tenseRouter);

module.exports = server;
