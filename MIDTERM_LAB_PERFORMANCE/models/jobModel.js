const db = require('./db');

module.exports= {
	getById: function(id, callback){
		var sql = "select * from job where jobId='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from job";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){

	},
	update:function(user, callback){

	},
	delete: function(id, callback){
		var sql = "DELETE from job where jobId='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	}
}