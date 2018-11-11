var express = require('express');
var router = express.Router();

router.get('/warmUp', function(req, res, next) {
    res.render('games/warmUp', { title: '1. Warm Up'});
});

module.exports = router;