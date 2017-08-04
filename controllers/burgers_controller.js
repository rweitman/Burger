var express = require("express");

var router = express();

var eaten = require("../models/burger.js");

var connection = require('../config/connection.js');

// var orm = {

// selectAll: function(tableName, cb) {
//     var queryString = "SELECT * FROM ??";
//     connection.query(queryString,[tableName],function(err, result) {
//       cb(result);
//     });}
// };

// var eaten = {

// selectAll: function(cb) {
//     connection.query("SELECT * FROM burgers_db.burgers", function(err, data) {
//     if (err) {
//       throw err;
//     }
//     cb(data);
// });
//   },

// insertOne: function(bun, cb) {
//   connection.query("INSERT INTO burgers_db.burgers (burger_name) VALUES (?)",[bun], function (err,data){
// if (err) {
//       throw err;
//     }
//     cb(data);
// });
//   },

// updateOne: function(id, cb) {
//   connection.query("UPDATE burgers_db.burgers SET devoured = true WHERE id = ?",[id], function (err,data){
// if (err) {
//       throw err;
//     }
//     cb(data);
// });
//   }


// };







router.get("/", function(req, res) {
eaten.selectAll(function(data) {
res.render("index", {burgers: data});
});
});


router.post("/", function(req,res){
eaten.insertOne([req.body.bun],function(data) {
 res.redirect("/");
 })});



router.put("/", function(req,res){
eaten.updateOne([req.body.id],function(data) {
 res.redirect("/");
 })});

// connection.query("UPDATE burgers_db.burgers SET devoured = true WHERE id = ?", [req.body.id], function(err, result) {


// router.get("/", function(req, res) {
// connection.query("SELECT * FROM burgers_db.burgers ", function(err, data) {
//     if (err) {
//       throw err;
//     }
//  res.render("index", {burgers: data});
//   });

// });

// router.put("/", function(req,res){
// connection.query("UPDATE burgers_db.burgers SET devoured = true WHERE id = ?", [req.body.id], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   })});

// router.post("/", function(req,res){
// connection.query("INSERT INTO burgers_db.burgers (burger_name) VALUES (?)", [req.body.bun], function(err, result) {
//     if (err) {
//       throw err; 
//     }

//     res.redirect("/");
//   })});



module.exports = router;