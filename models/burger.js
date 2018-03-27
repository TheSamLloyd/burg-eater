const orm = require("../config/orm.js");

function getBurgs(cb){
	orm.selectAll(cb);
}
function newBurg(name, cb){
	orm.insertOne(name, cb);
}
function eatBurg(id, cb){
	orm.updateOne(id, "`devoured`='1'", cb)
}
module.exports = {getBurgs, newBurg, eatBurg}