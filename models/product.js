//var mongoose = require('mongoose');
var conne=require('../connections/dbconnection');
//var mongoose=require('mongoose');
var Schema=conne.con1.Schema;
//console.log(Schema);
console.log(conne.con1.Schema);
var schemaa= new Schema({
imagePath:{type: String, required:true},
title:{type: String, required:true},
description:{type: String, required:true},
price:{type:Number,required:true}
});
module.exports=conne.con1.model('product',schemaa);