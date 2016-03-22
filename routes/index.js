var express = require('express');
var router = express.Router();

var sendgrid = require('sendgrid')('mansipatel108', 'mansipatel1996');

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
/* GET contact page. */
router.get('/contact_me', function (req, res, next) {
    req.flash('successmessage', 'Thank You. Your message has been sent.');
    req.flash('errormessage', 'An Error has occurred.');
    res.render('contact_me', { title: 'Contact', messages: null });
});
/* Email processing */
router.post('/contact_me', function (req, res, next) {
    sendgrid.send({
        to: 'mansipatel10@yahoo.com',
        from: req.body.email,
        subject: 'Contact Form Submission',
        text: "This message has been sent from the contact form at [MongoDB Demo]\r\n\r\n" +
            "Name: " + req.body.name + "\r\n\r\n" +
            "Phone: " + req.body.phone + "\r\n\r\n" +
            req.body.message,
        html: "This message has been sent from the contact form at [MongoDB Demo]<br><br>" +
            "<strong>Name:</strong> " + req.body.name + "<br><br>" +
            "<strong>Phone:</strong> " + req.body.phone + "<br><br>" +
            req.body.message
    }, function (err, json) {
        if (err) {
            res.status(500).json('error');
        }
        res.render('contact_me', {
          //  title: 'Contact',
            messages: req.flash('successmessage')
        });
    });
});

module.exports = router;
