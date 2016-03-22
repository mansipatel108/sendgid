var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.render('index');
});

//About get request
router.get('/about', function(req, res, next) {
  res.render('about');
});

//Services get request
router.get('/services', function(req, res, next) {
  res.render('services');
});

//Projects get request
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

//About get request
router.get('/contact_me', function(req, res, next) {
  res.render('contact_me');
});


module.exports = router;
