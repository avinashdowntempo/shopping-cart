var express = require('express');
var router = express.Router();
var csrf= require('csurf');
var passport= require('passport');
var Product= require('../models/product');
var Account= require('../models/universis-model/accounts');
var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
Product.find(function(err, docs){
var productChunks=[];
var chunkSize=3;
for (var i = 0; i < docs.length; i += chunkSize){
productChunks.push(docs.slice(i, i + chunkSize));
}
res.render('shop/index', { title: 'shopping kart', products: productChunks });
});  
});
router.get('/user/signup', function(req, res, next){
res.render('users/signup', {csrfToken: req.csrfToken()});
});
router.post('/user/signup',passport.authenticate('local.signup', {
successRedirect: '/user/profile',
failureRedirect: '/user/signup',
failureFlash:true
}));
router.get('/user/profile', function(req, res, next){
res.render('users/profile');
});
router.get('/universis', function(req, res, next){
Account.find(function(err, docs){
	console.log(docs);
res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(docs));
})
});
module.exports = router;
 