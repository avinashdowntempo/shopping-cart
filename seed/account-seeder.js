var account= require('../models/universis-model/newaccounts');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds021915.mlab.com:21915/universis');
var accounts=[new account({
	id: 189986,
	name: 'Dr. Robert Grewal',
  subaccounts: [{data: [41.93, 35.09, 22.99],labels: ['Global Equity', 'Canadian Equity', 'Canadian Balanced'], show: false, accname: '11A28865 - Self-Directed LIRA', acctype: 'Univeris Nominee', mrkvalue: 857369.92 },
  {data: [42.75, 21.6, 35.65], labels: ['Global Equity', 'Canadian Equity', 'Canadian Balanced'], show: false, accname: '11A28851 - SDRSP', acctype: 'Univeris Nominee', mrkvalue: 247868.61 },
  {data: [100], labels: ['Canadian Balanced'], show: false, accname: 'Open or Non-Registered', acctype: 'Univeris Client Name', mrkvalue: 129267.55 } ]}),
new account({ 
	id: 190549,
	name: 'Dr. Robert H Grewal & Mrs. Judy Grewal',
	subaccounts: [{data: [63.02, 26.67, 10.31], labels: ['Global Equity', 'Canadian Equity', 'U.S.Equity'], show: false, accname: '11A28865 - Self-Directed LIRA', acctype: 'Univeris Nominee', mrkvalue: 857369.92 },
  {data: [42.75, 21.6, 35.65], labels: ['Global Equity', 'Canadian Equity', 'Canadian Balanced'], show: false, accname: '11A28851 - SDRSP', acctype: 'Univeris Nominee', mrkvalue: 247868.61 },
  {data: [100,50], labels: ['Canadian Balanced','U.S.Equity'], show: false, accname: 'Open or Non-Registered', acctype: 'Univeris Client Name', mrkvalue: 129267.55 } ]})
];
var done=0;
console.log(accounts.length);
for(var i=0; i < accounts.length; i++){
console.log("bong");
accounts[i].save(function(err,result){
done++;
console.log(done);
console.log(accounts[i]);
if(done === accounts.length){
exit();
}
});
}
function exit(){
mongoose.disconnect();
console.log('complete');
}