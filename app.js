var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var session = require('express-session');
var passport= require('passport');
var flash= require('connect-flash');
var conne=require('./connections/dbconnection');
var ejs=require('ejs');

//mongoose.connect("mongodb://admin:test@ds141401.mlab.com:41401/testing");
//mongoose.connect("mongodb://admin:admin@ds021915.mlab.com:21915/universis");
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
//console.log('connection open from mongoose');
//});
var dba=conne.con1.connection;
dba.on('error', console.error.bind(console, 'connection error:'));
dba.once('open', function() {
console.log('connection open from mongoose1');
});
var dbb=conne.con2.connection;
dbb.on('error', console.error.bind(console, 'connection error:'));
dbb.once('open', function() {
console.log('connection open from mongoose2');
});
require('./config/passport');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('view engine', "ejs");
app.engine("html", require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'mysecretkey', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', index);

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
});

module.exports = app;
