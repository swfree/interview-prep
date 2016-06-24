var express = require('express');
var app = express();
var questions = require('./data.js');

app.get('/', function(req, res) {
  res.send(questions);
});

app.listen(3000, function() {
  console.log('app listening on port 3000...');
});

