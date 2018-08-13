let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let passport = require('passport');
let createError = require('http-errors');

require('./bin/models/User');
require('./bin/models/charsheet');
require('./bin/models/dndClass')
require('./bin/models/spell');
require('./config/passport');

mongoose.connect(process.env.DND_DATABASE ||'mongodb://localhost/DndApp');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();
let cors = require('cors');
app.use(cors({origin: "*"}));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/API/users', usersRouter);


/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}); 

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

module.exports = app;
