var express = require('express');
var router = express.Router();
var Book=require('../models/booksmodel')
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

	res.redirect('/books');
});


module.exports = router;
