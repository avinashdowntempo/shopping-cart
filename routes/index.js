var express = require('express');
var router = express.Router();
var csrf= require('csurf');
var passport= require('passport');
var Account= require('../models/universis-model/newaccounts');
var Advisor= require('../models/universis-model/advisor');
var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next){
res.sendFile(path.join(__dirname + '/..', 'dist/index.html'));
});
router.get('/signup', function(req, res, next){
res.sendFile(path.join(__dirname + '/..', 'dist/signup.html'));
});


router.get('/universis/accounts', function(req, res, next){
Account.find(function(err, docs){
	console.log(docs);
res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(docs));
})
});
router.get('/universis/advisor', function(req, res, next){
Advisor.find(function(err, docs){
	console.log(docs);
res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(docs));
})
});
router.get('*',function (req, res) {
        res.redirect('/');
    });
module.exports = router;
 