const db = require("./db");

module.exports = {
  getById: function (id, callback) {
    var sql =
      "select * from wishlist full join attraction on wishlist.attraction_id = attraction.attraction_id where wishlist_id='" +
      id +
      "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  getAll: function (username, callback) {
    var sql =
      "select * from wishlist inner join attraction using (attraction_id) where user_name='" +
      username +
      "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  insert: function (place_id, username, callback) {
    var sql = `insert into wishlist (wishlist_id, user_name, attraction_id) values('', '${username}', "${place_id}");`;
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  delete: function (id, callback) {
    var sql = "DELETE from wishlist where wishlist_id='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
};
