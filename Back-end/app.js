var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var professorsRouter = require('./routes/professors');

var app = express();

// Enable CORS for cross-origin requests
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/professors', professorsRouter);

module.exports = app;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Himani:Himani1234@professor.nv2k8zv.mongodb.net/');
}