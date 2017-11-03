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
    fortune: 'Vampires will soon suck your blood.'
  },
  {
    fortune: 'You will be abducted by aliens in one week.'
  },
  {
    fortune: 'The fortune you seek is in another cookie.'
  },
  {
    fortune: 'It would be best to maintain a low profile for now.'
  },
  {
    fortune: 'Step on a crack, break your mom\'s back.'
  },
  {
    fortune: 'Your food isn\'t going to agree with you tomorrow.'
  },
  {
    fortune: 'Computer Science will make you an excellent beggar.'
  },
  {
    fortune: 'Wow, the fortune is bad enough, I probably shouldn\'t tell you it.'
  },
  {
    fortune: 'You will be chosen for the Hunger Games!'
  },
  {
    fortune: 'It\'s IT\'S... THE GRIM!'
  },
  {
    fortune: 'If you do not take Madam Zeroni up the mountain, you and your family will be cursed for always and eternity.'
  },
  {
    fortune: 'The force is... not very strong in you.'
  },
  {
    fortune: 'You\'ll end up like Lindsey Lohan.'
  },
  {
    fortune: 'Eat a banana, or a banana will eat you.'
  },
  {
    fortune: 'It\'s dangerous to go alone, but alone is all you\'ll ever be.'
  },
  {
    fortune: 'Your resemblance to a muppet will prevent the world from taking you seriously.'
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
