var express = require('express'),
    app = express(),
    _ = require('lodash'),
    http = require('http'),
    server = http.createServer(app),
    EventEmitter = require('events').EventEmitter,
    schedule = require('node-schedule');

app.configure(function() {
  app.use(express.urlencoded());
  app.use(express.json());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/client/'));
  app.use(app.router);
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

server.listen(5000);

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/client/track/track.html');
});
