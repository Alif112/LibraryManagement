var express = require('express');
var router = express.Router();
var Book=require('../models/booksmodel');

var Student=require('../models/studentmodel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
  res.render('author');
});

router.get('/timeline', function(req, res, next) {
  var data = [
    { id: 1, name: "bob" },
    { id: 2, name: "john" },
    { id: 3, name: "jake" },
  ];

  res.render('time',{info:data});
});


router.get('/books',function(req,res,next){
	res.render('addbooks');
});


router.post('/books',function(req,res,next){
	var isbnid=req.body.isbnid;
	var name=req.body.bookname;
	var author=req.body.author;

	console.log(isbnid+' - '+name+' - '+author);
	
	var query={};

	Book.findOneAndUpdate(query, {
    $set: {
      isbnid:isbnid,
      name:name,
      author:author
    }
  }, {
    new: true,
    upsert: true
  }, function(err, doc) {
    if (err) {
      console.log("Something wrong when updating data!");
    }});


});



module.exports = router;
