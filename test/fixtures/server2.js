
var http = require('http');
var express = require('express');
var die = require('../../');
var app = express();

die.html = 'hi';
die.timeout = 100;
die.kill = function () {
  process.exit(1);
};

app.get('/', function(req, res){
  res.send('Hello, there!');
});

app.get('/die', die);

http.createServer(app).listen(3555, function(){
  console.log('server running');
});
