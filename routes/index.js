var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nhac', function(req, res, next) {
  res.redirect('https://google.com');
});


module.exports = router;
