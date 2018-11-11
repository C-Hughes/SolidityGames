var express = require('express');
var router = express.Router();

router.get('/warmUp', function(req, res, next) {
    res.render('games/warmUp', { title: '1. Warm Up'});
});

router.get('/odometer', function(req, res, next) {
    res.render('games/odometer', { title: '2. Odometer'});
});

module.exports = router;