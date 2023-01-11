const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/person.route');
app.use(express.json())
app.use('/', index);
app.use('/persons', personRoute);

module.exports = app;