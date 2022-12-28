const mongoose = require("mongoose");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var peopleRouter = require('./routes/people');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/people', peopleRouter);


const CONNECTION_URL = "mongodb+srv://mimi:OV4Sk1MK0HAJj0GE@cluster0.3pny8mj.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to DB"))
    .catch((error) => console.log(error.message));

module.exports = app;
