var express = require('express');
var router = express.Router();
var Teacherdetails=require('../app/controllers/teacherdetailscontroller');



router.get('/',Teacherdetails.profile);
router.get('/data',Teacherdetails.data);











module.exports = router;