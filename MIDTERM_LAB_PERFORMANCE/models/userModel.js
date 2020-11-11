const db = require("./db");

module.exports = {
  validate: function (user, callback) {
    var sql =
      "select * from user where user_name='" +
      user.username +
      "' and password='" +
      user.password +
      "'";
    db.getResults(sql, function (results) {
      if (results.length > 0) {
        callback(true, results[0].user_type);
      } else {
        callback(false);
      }
    });
  },
  getById: function (id, callback) {
    var sql = "select * from user where userId='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
  getAll: function (callback) {
    var sql = "select * from user";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
  insert: function (user, callback) {
    // var sql = "insert into user (`userId`, `name`, `companyName`, `contactNo`, `user_name`, `password`, `user_type`) values('', '"+user[2]+"', '"+user[3]+"', '"+user[4]+"', '"+user[0]+"', '"+user[1]+"', '0');";
    var sql = `insert into user (userId, name, companyName, contactNo, user_name, password, user_type) values('', '${user[2]}', '${user[3]}', '${user[4]}', '${user[0]}', '${user[1]}', '0');`;
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
  update: function (id, user, callback) {
    // var sql = "update from user set user_name='"+user[0]+"', password='"+user[1]+"', name='"+user[2]+"', companyName='"+user[3]+"', contactNo='"+user[4]+"' where user.userId='"+id+"'";
    var sql = `update user set user_name='${user[0]}', password='${user[1]}', name='${user[2]}', companyName='${user[3]}', contactNo='${user[4]}' where user.userId='${id}'`;
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
  delete: function (id, callback) {
    var sql = "DELETE from user where userId='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  getByName: function (name, callback) {
    var sql = "select * from user where name like '%" + name + "%'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
};
