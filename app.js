<<<<<<< HEAD
require('dotenv'). config()
=======
require('dotenv').config()
>>>>>>> 9354cf6dde4624ab983d906d664146e9ddca2d6e

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Conecta ao BD
<<<<<<< HEAD
require('./config/db');
=======
require('./config/db')
>>>>>>> 9354cf6dde4624ab983d906d664146e9ddca2d6e

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

<<<<<<< HEAD
const aluno = require('./routes/aluno');
app.use('/aluno', aluno);

=======
>>>>>>> 9354cf6dde4624ab983d906d664146e9ddca2d6e
module.exports = app;
