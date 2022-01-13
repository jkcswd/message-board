var express = require('express');
var router = express.Router();
var newMessage = require('./new')

const messages = newMessage.messages;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-Message Board', messages: messages });
});

module.exports = router;