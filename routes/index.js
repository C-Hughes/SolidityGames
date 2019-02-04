var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Solidity Games' });
});

router.get('/ethereum', function(req, res, next) {
    res.render('info/ethereum', { title: 'Solidity Games' });
});

router.get('/smartContracts', function(req, res, next) {
    res.render('info/smartContracts', { title: 'Solidity Games' });
});

router.get('/metamask', function(req, res, next) {
    res.render('info/metamask', { title: 'Solidity Games' });
});

router.get('/survey', function(req, res, next) {
    res.render('pages/survey', { title: 'Solidity Games' });
});

module.exports = router;
