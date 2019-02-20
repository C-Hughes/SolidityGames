var express = require('express');
var router = express.Router();

router.get('/welcome', function(req, res, next) {
    res.render('pages/welcome', { title: 'Welcome Page' });
});

router.post('/welcome', function(req, res, next) {
    req.session.authenticated = true;
    res.redirect('/');
});



router.use('/', isAuthenticated, function(req, res, next){
    next();
});

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
    res.render('info/metaMask', { title: 'Solidity Games' });
});

router.get('/vulnerabilities', function(req, res, next) {
    res.render('resources/vulnerabilities', { title: 'Solidity Games' });
});

router.get('/realexamples', function(req, res, next) {
    res.render('resources/realExamples', { title: 'Solidity Games' });
});

router.get('/securitytools', function(req, res, next) {
    res.render('resources/securityTools', { title: 'Solidity Games' });
});

router.get('/survey', function(req, res, next) {
    res.render('pages/survey', { title: 'Solidity Games' });
});

module.exports = router;

function isAuthenticated(req, res ,next){
    if (req.session.authenticated == true){
        return next();
    }
    res.redirect('/welcome');
}