var express = require('express');
var router = express.Router();

router.get('/warmUp', function(req, res, next) {
    res.render('games/warmUp', { title: '1. Warm Up'});
});

router.get('/rubixi', function(req, res, next) {
    res.render('games/rubixi', { title: '2. Rubixi'});
});

router.get('/odometer', function(req, res, next) {
    res.render('games/odometer', { title: '3. Odometer'});
});

router.get('/keepingSecrets', function(req, res, next) {
    res.render('games/keepingSecrets', { title: '4. Keeping Secrets'});
});

module.exports = router;