var express = require('express');
var router = express.Router();
//create mongoose models
var User = require('../models/user');
var Dog = require('../models/dog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', dogs: [] });
});

/* POST when the user "likes" a new Corgi. */
router.post('/likes', function(req, res, next) {

});

module.exports = router;
