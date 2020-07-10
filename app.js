const express = require('express');

const morgan = require('morgan');

const app = express();

const tracksRouter = require('./routes/tracks');

app.use(express.json());
app.use(morgan('dev'));

app.use('/tracks', tracksRouter);

module.exports = app;
