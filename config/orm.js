const connection = require("./connection.js");
function query(SQL, res){
	connection.connect(err => {
		if (err){
			console.log(err)
		}
	});
	connection.query(SQL, function(error, result){
		console.log(result)
		res.send(result);
	})
	connection.end();
}
var Orm = {
	selectAll: function(res){
		var SQL = `SELECT * FROM burgers_db.burgers`
		query(SQL, res)
	},
	insertOne: function(burger_name, res){
		var SQL = `INSERT INTO burgers_db.burgers ('burger_name', 'devoured') VALUES (${burger_name}, 'false')`;
		query(SQL,res)
	},
	updateOne: function(id, change, res){
		var SQL = `UPDATE burgers_db.burgers SET ${change} WHERE id=${id}`;
		query(SQL, res)
	}
}
module.exports = Orm;