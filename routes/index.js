var express = require('express');
var router = express.Router();

var fortunes = [
  {
    fortune: 'Your not going to do well on your next test.'
  },
  {
    fortune: 'We all float down here. You\'ll float too.'   
  },
  {
    fortune: 'An invisible spider has decided to live in your bed.'
  },
  {
    fortune: 'The end is near and it is your fault.'
  },
  {
    fortune: 'Your classmates secretly agree that your head is too small for your body.'
  },
  {
    fortune: 'You will die alone and poorly dressed.'
  },
  {
    fortune: 'You will have a happy life.'
  },
  {
    fortune: 'One of your pets is plotting your demise.'
  },
  {
    fortune: 'Your identity was just stolen.'
  },
  {
    fortune: 'Adding a little excersize to your routine will do wonders.'
  }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/fortune', function(req, res) {
  res.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

module.exports = router;
