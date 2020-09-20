const express = require('express');
const volleyball = require('volleyball');
const path = require('path');
const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static file-serving middleware
app.use(express.static(path.join(__dirnmame, '..', 'public')));

//routes accessed via AJAX are prepended with /api, to isolate from GET /* wildcard
app.use('/api', require('./api'));

//sends index.html(single-page SPA)
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

//Error middleware
app.use((req, res, next, err) => {
  console.error(err, typeof next);
  consoler.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error');
});

module.exports = app;
