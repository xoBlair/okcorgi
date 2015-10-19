var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//create mongoose models
var User = require('../models/user');
var Dog = require('../models/dog');
var dogPic = randomDog();
var dogName = randomDog();


 function randomDog() {
 	var dog = ;
	return dog[Math.floor(Math.random()*dog.length)];
 }
/* GET home page. */
router.get('/', function(req, res, next) {
	Dog.find({ }, 'name url', function(err, dog) {
  if (err) console.log(err);
  console.log(dog);
});

  res.render('index', { title: 'Express', dogs: [], dogPic: dogPic, dogName: dogName});
});

/* POST when the user "likes" a new Corgi. */
router.post('/likes', function(req, res, next) {
	
});



// //var dog = mongoose.model('Dog', dogSchema);


// function randomDog() {
// 	// var dog = mongoose.model('Dog', dogSchema);
// 	return dog[Math.floor(Math.random()*dog.length)];
// }

// /* GET dog from db. */
// router.get('/dog', function(req, res, next) {
// 	var dog = randomDog();
// 	res.render('dog', { dog: dog });
// });




module.exports = router;
