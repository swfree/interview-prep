var myQuestions = [];

$.get('https://murmuring-plains-85898.herokuapp.com/data', function(response) {
  appendToPage(response);
});

function appendToPage (questions) {
  var $container = $('.cards-container');
  for (var i = 0; i < 16; i++) {
    myQuestions.push(questions[i]);
    var colorClass = 'misc';
    if (questions[i].category === 'javascript') { colorClass = 'js'; }
    if (questions[i].category === 'databases') { colorClass = 'dbs'; }
    if (questions[i].category === 'algorithms') { colorClass = 'algos'; }
    if (questions[i].category === 'frameworks') { colorClass = 'frameworks'; }
    if (questions[i].category === 'html') { colorClass = 'html'; }
    if (questions[i].category === 'css') { colorClass = 'css'; }
    var toAppend = '<div class="card card-' + colorClass + '"><div class="card-question">' + questions[i].question + '</div><div class="card-actions"><button class="card-action-btn" onclick="giveAnswer(' + i + ')">ANSWER</button><button class="card-action-btn">NOTES</button><button class="card-action-btn">IGNORE</button></div></div>';
    $container.append(toAppend);
  }
}

function giveAnswer (id) {
  console.log('Answer for Q #', id, ' is: ', myQuestions[id].answer);
  $('.cards-container:nth-child(2)').html('<span>HELLLLLO</span>');
}