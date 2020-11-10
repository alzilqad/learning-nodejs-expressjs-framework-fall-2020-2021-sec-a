const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where user_name='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true, results[0].user_type);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		// var sql = "select * from user where userId='"+id+"'";
		// db.getResults(sql, function(results){
		// 	callback(results);
		// });
	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){

	},
	update:function(user, callback){

	},
	delete: function(id, callback){

	}
}