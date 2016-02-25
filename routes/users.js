/*
Name: Yuji Fujiyama-200300256
Project: Midterm
Date: Feb. 25. 2016
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
