var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "yg0m68tzwyjjotb5",
  password: "bqnle7edaf9jsi04",
  database: "z5t1435ep5v9l7gn"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
