const connection = require("./connection.js");
function query(SQL, cb){
	connection.query(SQL, function(error, result){
		if (error) {
			console.log(error);
			return;
		}
		console.log(result)
		cb(result);
	})
}
var Orm = {
	selectAll: function(cb){
		var SQL = `SELECT * FROM burgers_db.burgers`
		query(SQL, cb)
	},
	insertOne: function(burger_name, cb){
		var SQL = "INSERT INTO burgers_db.burgers (`burger_name`, `devoured`) VALUES ('"+burger_name+"', 'false')";
		query(SQL,cb)
	},
	updateOne: function(id, change, cb){
		var SQL = "UPDATE burgers_db.burgers SET "+change+" WHERE `id`='"+id+"'";
		query(SQL, cb)
	}
}
module.exports = Orm;