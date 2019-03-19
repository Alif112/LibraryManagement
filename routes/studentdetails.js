var express = require('express');
var router = express.Router();
var Book=require('../models/booksmodel');

var Student=require('../models/studentmodel');

router.get('/',function(req,res,next){
	Student.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('studentdetails',{info:results});
    	}
  	});
});


router.get('/addstudents',function(req,res,next){
	res.render('addstudents');
});

router.post('/addstudents',function(req,res,next){
	var stdid=req.body.stdid;
	var stdname=req.body.stdname;

	console.log(stdid+'-'+stdname);

	var query={stdid:stdid};

	Student.findOneAndUpdate(query, {
    $set: {
      stdid:stdid,
      stdname:stdname
    }
  }, {
    new: true,
    upsert: true
  }, function(err, doc) {
    if (err) {
      console.log("Something wrong when updating data!");
    }});

	res.redirect('/studentdetails');
});


router.get('/edit/:id',function(req,res,next){
  var id = req.params.id;
  var query={_id:id};

    Student.find(query,
      function(err, results) {
        if (err) throw err;
        console.log(results);
        res.render('updatestudents',{info:results});
    });

});




router.get('/delete/:id',function(req,res,next){
	var id = req.params.id;
  	var query={_id:id};

  	Student.remove({
    	_id: id
  		}, function(err) {
    	if (err) throw err;
    	res.redirect('/studentdetails');
  });


  	
});


module.exports = router;