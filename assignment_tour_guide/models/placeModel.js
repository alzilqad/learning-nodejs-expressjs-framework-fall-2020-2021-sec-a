const db = require("./db");

module.exports = {
  getById: function (id, callback) {
    var sql = "select * from attraction where attraction_id='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  getAll: function (callback) {
    var sql = "select * from attraction";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  insert: function (place, callback) {
    var sql = `insert into attraction (attraction_id, title, description, country_name, history, username, status) values('', "${place[0]}", '${place[1]}', '${place[2]}', '${place[3]}', '${place[4]}', 'Inactive');`;
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  update: function (id, place, callback) {
    var sql = `update attraction set title='${place[0]}', description='${place[1]}', country_name='${place[2]}', history='${place[3]}', username='${place[4]}' where attraction.attraction_id='${id}'`;
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  delete: function (id, callback) {
    var sql = "DELETE from attraction where attraction_id='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  getByName: function (name, callback) {
    var sql = "select * from attraction where country_name like '%" + name + "%'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
};
