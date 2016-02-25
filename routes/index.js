/*
Name: Yuji Fujiyama-200300256
Project: Midterm
Date: Feb. 25. 2016
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* Byron Essert. */
router.get('/byron', function(req, res, next) {
  res.render('byron', { title: 'Favorite Person #1' });
});


/* Patrick Switzer */
router.get('/patrick', function(req, res, next) {
  res.render('patrick', { title: 'Favorite Person #2' });
});

/* James Kelly */
router.get('/james', function(req, res, next) {
  res.render('james', { title: 'Favorite Person #3' });
});

/* CONTACT ME PAGE. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
module.exports = router;
