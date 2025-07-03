var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var professorRouter = require('./routes/professor');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/professor', professorRouter);

module.exports = app;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Himani:Himani1234@professor.nv2k8zv.mongodb.net/');
}