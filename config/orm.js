var connection = require('../config/connection.js');

var orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName],function(err, data) {
      if (err) {throw (err);}
      cb(data);
    });
  },
  insertOne: function(tableName, category, vals, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableName,category,vals], function(err, data) {
       if (err) {throw (err);}
      cb(data);
    });
},

  updateOne: function(tableName, boolVar, boolVal, idVar, identify, cb) {
    var queryString = "UPDATE ?? SET ?? = ?  WHERE ?? = ?";

    connection.query(queryString, [tableName,boolVar, boolVal, idVar, identify], function(err, data) {
        if (err) {throw (err);}
     cb(data);
    });
  }
};

module.exports = orm;