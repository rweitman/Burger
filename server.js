var express = require("express");

var app = express();

app.use(express.static("public/assets"));

var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var concept = "mysql://b9758dbe35fd1b:404e0b58@us-cdbr-iron-east-05.cleardb.net/heroku_190559482844405?reconnect=true";


var PORT = process.env.concept.PORT || 3000;

// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("Listening on PORT 3000");
});



// const SocketServer = require('ws').Server;
// const path = require('path');

// const PORT = process.env.PORT || 3000;

// const server = express()
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// const wss = new SocketServer({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.on('close', () => console.log('Client disconnected'));
// });

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);

// 'use strict';

// const express = require('express');
// const SocketServer = require('ws').Server;
// const path = require('path');

// const PORT = process.env.PORT || 3000;
// const INDEX = path.join(__dirname, '/');

// const server = express()
//   .use((req, res) => res.sendFile(INDEX) )
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// const wss = new SocketServer({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.on('close', () => console.log('Client disconnected'));
// });

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);