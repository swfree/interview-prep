module.exports = [
  {
    "id": 1,
    "question": "What's the difference between HTML and HTML5?",
    "answer": "HTML was written for simple markup, HTML5 can be seen as a whole application development paradigm.",
    "type": "short answer",
    "category": "html",
    "tags": [ "trivia", "html" ],
    "timestamp": "Fri Jun 24 2016 14:14:04 GMT-0700 (PDT)"
  },
  {
    "id": 2,
    "question": "What does p > p do in CSS?",
    "answer": "Something about sibling p tags...",
    "type": "short answer",
    "category": "css",
    "tags": [ "trivia", "css" ],
    "timestamp": "Fri Jun 24 2016 15:14:04 GMT-0700 (PDT)"
  },
  {
    "id": 3,
    "question": "What's pseudoclassical inheritance?",
    "answer": "Well there is no classical system in JavaScript, so here we have an alternative blech...",
    "type": "short answer",
    "category": "javascript",
    "tags": [ "trivia", "javascript" ],
    "timestamp": "Fri Jun 24 2016 16:14:04 GMT-0700 (PDT)"
  },
  {
    "id": 4,
    "question": "What's flexbox do ?",
    "answer": "best grid system in CSS3. Use ratios for responsive design.",
    "type": "short answer",
    "category": "css",
    "tags": [ "trivia", "css" ],
    "timestamp": "Fri Jun 24 2016 15:30:04 GMT-0700 (PDT)"
  },
  {
    "id": 5,
    "question": "What are some benefits of react vs angular?",
    "answer": "react components are awesome for scale and modularized code and such and such",
    "type": "short answer",
    "category": "javascript",
    "tags": [ "trivia", "javascript" ],
    "timestamp": "Fri Jun 24 2016 16:45:00 GMT-0700 (PDT)"
  },
  {
    "id": 6,
    "question": "What is the Same-origin policy?",
    "answer": "A web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin -- i.e. URI scheme, hostname, and port number. Prevents a malicious script on one page from obtaining sensitive data on another page through that page's DOM. Ex: you're logged into your bank site; you go to another random site without logging out; that other site could run some malicious JS code in the background requesting data from the bank, using your session cookies.",
    "type": "long answer",
    "category": "html".
    "tags": [ "trivia", "html" ],
    "timestamp": "Thu Jun 30 2016 10:43:00 GMT-0700 (PDT)"
  },
  {
    "id": 7,
    "question": "What is CORS?",
    "answer": "A technique for relaxing the strictness of the same-origin policy. Stands for Cross-Origin Resource Sharing. It extends HTTP with a new Origin request header and a new Access-Control-Allow-Origin request header. Allows servers to use a header to explicitly list origins that may request a file or to use a wildcard and allow a file to be requested by any site. Like for public APIs!!",
    "type": "long answer",
    "tags": [ "trivia", "html" ],
    "timestamp": "Thu Jun 30 2016 10:50:00 GMT-0700 (PDT)"
  },
  {
    "id": 8,
    "question": "What is JSONP?",
    "answer": "Allows a page to receive JSON data from a different domain by adding a <script> element to the page which loads a JSON response with a callback from a different domain. It's another way to get around the strictness of the same-origin policy implemented by browsers.",
    "type": "long answer",
    "tags" [ "html" ],
    "timestamp": "Thu Jun 30 2016 10:52:00 GMT-0700 (PDT)"
  }
];
