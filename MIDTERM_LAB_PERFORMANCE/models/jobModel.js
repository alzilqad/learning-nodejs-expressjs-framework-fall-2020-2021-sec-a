const db = require("./db");

module.exports = {
  getById: function (id, callback) {
    var sql = "select * from job where jobId='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
  getAll: function (callback) {
    var sql = "select * from job";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
  insert: function (job, callback) {
	var sql = `insert into job (jobId, companyName, title, location, salary) values('', '${job[0]}', '${job[1]}', '${job[2]}', '${job[3]}');`;
	db.getResults(sql, function(results){
		callback(results);
	});
  },
  update: function (id, job, callback) {
	var sql = `update job set companyName='${job[0]}', title='${job[1]}', location='${job[2]}', salary='${job[3]}' where jobId='${id}'`;
	db.getResults(sql, function (results) {
      callback(results);
    });
  },
  delete: function (id, callback) {
    var sql = "DELETE from job where jobId='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
};
