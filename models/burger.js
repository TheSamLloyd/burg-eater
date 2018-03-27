const orm = require("../config/orm.js");

function getBurgs(res){
	orm.selectAll();
}
function newBurg(name, res){
	orm.insertOne(name);
}
function eatBurg(id, res){
	orm.updateOne(id, `"devoured"="true"`, res)
}
module.exports = {getBurgs, newBurg, eatBurg}