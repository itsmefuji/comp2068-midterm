/*
Yuji Fujiyama-200300256
Express Porfolio Assignment
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'the Home Page' });
});

/* Byron Essert. */
router.get('/byron', function(req, res, next) {
  res.render('byron', { title: 'Favorite Person #1' });
});


/* Patrick Switzer */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Favorite Person #2' });
});

/* James Kelly */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Favorite Person #3' });
});

/* CONTACT ME PAGE. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
module.exports = router;
