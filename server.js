var express = require('express');
var app = express();
var cors = require('cors');
var questions = require('./data.js');

app.use(cors());

app.get('/', function(req, res) {
  res.send(questions);
});

app.listen(3000, function() {
  console.log('app listening on port 3000...');
});

