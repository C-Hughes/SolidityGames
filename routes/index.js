var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Solidity Games' });
});

/* GET home page. */
router.get('/survey', function(req, res, next) {
    res.render('pages/survey', { title: 'Solidity Games' });
});

module.exports = router;
