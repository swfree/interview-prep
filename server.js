var express = require('express');
var app = express();
var cors = require('cors');
var questions = require('./data.js');

app.use(cors());

app.use(express.static('public'));

app.get('/questions', function(req, res) {
  res.send(questions);
});

app.get('/random', function(req, res) {
  var randomIndex = Math.floor(Math.random()*questions.length);
  res.send(questions[randomIndex]);
});

app.get('/random/javascript', function(req, res) {
  var filterCriteria = 'javascript';
  var filteredQuestions = questions.filter(function(question) {
    return question.category === filterCriteria;
  });

  var randomIndex = Math.floor(Math.random()*filteredQuestions.length);
  res.send(filteredQuestions[randomIndex]);
});

app.get('/random/css', function(req, res) {
  var filterCriteria = 'css';
  var filteredQuestions = questions.filter(function(question) {
    return question.category === filterCriteria;
  });

  var randomIndex = Math.floor(Math.random()*filteredQuestions.length);
  res.send(filteredQuestions[randomIndex]);
});

app.get('/random/html', function(req, res) {
  var filterCriteria = 'html';
  var filteredQuestions = questions.filter(function(question) {
    return question.category === filterCriteria;
  });

  var randomIndex = Math.floor(Math.random()*filteredQuestions.length);
  res.send(filteredQuestions[randomIndex]);
});

app.listen(3000, function() {
  console.log('app listening on port 3000...');
});
