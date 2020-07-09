const express = require('express');

const morgan = require('morgan');

const app = express();

const trackRouter = require('./routes/tracks');

const a = null;
console.log(typeof a);

app.use(express.json());
app.use(morgan('dev'));

app.use('/tracks', trackRouter);

app.listen(33, (error) => {
  if (error) console.log(error);

  console.log(`App running on port 33`);
});
