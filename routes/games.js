var express = require('express');
var router = express.Router();
var levelFeedback = require('../models/levelFeedback');

router.use('/', isAuthenticated, function(req, res, next){
   next();
});

///// GET REQUESTS /////
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

router.get('/externalFactors', function(req, res, next) {
    res.render('games/externalFactors', { title: '5. External Factors'});
});

router.get('/forcedPayments', function(req, res, next) {
    res.render('games/forcedPayments', { title: '6. Forced Payments'});
});

router.get('/simpleDAO', function(req, res, next) {
    res.render('games/simpleDAO', { title: '7. simpleDAO'});
});

router.get('/randomness', function(req, res, next) {
    res.render('games/randomness', { title: '8. Randomness'});
});


/////// POST REQUESTS /////////
router.post('/warmUp', function(req, res, next) {
    var query = { Session: req.sessionID};
    var update = {WarmUp: req.body.levelFeedback};
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    levelFeedback.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
        } else {
            res.redirect('/games/warmUp');
        }
    });
});

module.exports = router;

function isAuthenticated(req, res ,next){
    if (req.session.authenticated == true){
        return next();
    }
    res.redirect('/welcome');
}