var express = require('express');
var app = express();
var cors = require('cors');
var questions = require('./data.js');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 3000));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));

app.get('/questions', function(req, res) {
  res.send(questions);
});

app.get('/slack', function(req, res) {
  var randomIndex = Math.floor(Math.random()*questions.length);

  var slackFormat = {
    "response_type": "in_channel",
    "text": questions[randomIndex].question,
    "attachments": [
      {
        "title": "Answer",
        "text": questions[randomIndex].answer
      }
    ]
  };

  res.send(slackFormat);
});

app.post('/slack', function(req, res) {
  var randomIndex = Math.floor(Math.random()*questions.length);

  var slackFormat = {
    "response_type": "in_channel",
    "text": questions[randomIndex].question,
    "attachments": [
      {
        "text": "See answer:",
        "fallback": "oops slack button didn't work",
        "callback_id": "interview_bot_answer",
        "color": "#dd99ff",
        "actions": [
          {
            "name": "answer",
            "text": "Answer",
            "type": "button",
            "value": questions[randomIndex].id
          }
        ]
      }
    ]
  };

  res.send(slackFormat);
});

app.post('/slackbutton', function(req, res) {
  // var questionID = Number(req.body.payload.actions[0].value);
  // var question = questions[questionID];
  // var questionIDText = 'question id is: ' + questionID;
  var randomQuestion = 'random question is : ' + questions[10].question;

  var slackFormat = {
    "response_type": "in_channel",
    "text": "slack response",
    "attachments": [
      {
        "title": "Answer:",
        "text": req.body.payload.actions,
        "color": "#dd99ff"
      }
    ]
  };

  res.send(slackFormat);
});

app.get('/auth', function(req, res) {

  console.log('IN OAUTH URI REDIRECT: ', req);

  res.send({});
});

app.get('/slack/javascript', function(req, res) {
  var filterCriteria = 'javascript';
  var filteredQuestions = questions.filter(function(question) {
    return question.category === filterCriteria;
  });

  var randomIndex = Math.floor(Math.random()*filteredQuestions.length);
  res.send(filteredQuestions[randomIndex]);
});

app.get('/slack/css', function(req, res) {
  var filterCriteria = 'css';
  var filteredQuestions = questions.filter(function(question) {
    return question.category === filterCriteria;
  });

  var randomIndex = Math.floor(Math.random()*filteredQuestions.length);
  res.send(filteredQuestions[randomIndex]);
});

app.get('/slack/html', function(req, res) {
  var filterCriteria = 'html';
  var filteredQuestions = questions.filter(function(question) {
    return question.category === filterCriteria;
  });

  var randomIndex = Math.floor(Math.random()*filteredQuestions.length);
  res.send(filteredQuestions[randomIndex]);
});

app.listen(app.get('port'), function() {
  console.log('app listening on port ', app.get('port'));
});
