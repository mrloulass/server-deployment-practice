'use strict';

// import a third party dependency (code we did not write).
const express = require('express');

// imports a local dependency (code we wrote ourselves).
const Person = require('./Person.js');

const app = express();

app.get('/', (req, res) => {
  res.send({"message": "thanks"});
});

app.get('/data', (req, res) => {
  res.send(new Person('Louis', 39));
});

module.exports = app;
