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

router.get('/randomness', function(req, res, next) {
    res.render('games/randomness', { title: '7. Randomness'});
});

router.get('/simpleDAO', function(req, res, next) {
    res.render('games/simpleDAO', { title: '8. simpleDAO'});
});


/////// POST REQUESTS /////////
router.post('/warmUp', function(req, res, next) {
    var query = { Session: req.sessionID};
    var update = {WarmUp: req.body.levelFeedback};
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    levelFeedback.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
            res.redirect('/games/warmUp');
        } else {
            res.redirect('/games/warmUp');
        }
    });
});

router.post('/rubixi', function(req, res, next) {
    var query = { Session: req.sessionID};
    var update = {Rubixi: req.body.levelFeedback};
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    levelFeedback.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
            res.redirect('/games/rubixi');
        } else {
            res.redirect('/games/rubixi');
        }
    });
});

router.post('/odometer', function(req, res, next) {
    var query = { Session: req.sessionID};
    var update = {Odometer: req.body.levelFeedback};
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    levelFeedback.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
            res.redirect('/games/odometer');
        } else {
            res.redirect('/games/odometer');
        }
    });
});

router.post('/keepingSecrets', function(req, res, next) {
    var query = { Session: req.sessionID};
    var update = {KeepingSecrets: req.body.levelFeedback};
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    levelFeedback.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
            res.redirect('/games/keepingSecrets');
        } else {
            res.redirect('/games/keepingSecrets');
        }
    });
});

router.post('/externalFactors', function(req, res, next) {
    var query = { Session: req.sessionID};
    var update = {ExternalFactors: req.body.levelFeedback};
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    levelFeedback.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
            res.redirect('/games/externalFactors');
        } else {
            res.redirect('/games/externalFactors');
        }
    });
});

router.post('/forcedPayments', function(req, res, next) {
    var query = { Session: req.sessionID};
    var update = {ForcedPayments: req.body.levelFeedback};
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    levelFeedback.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
            res.redirect('/games/forcedPayments');
        } else {
            res.redirect('/games/forcedPayments');
        }
    });
});

router.post('/randomness', function(req, res, next) {
    var query = { Session: req.sessionID};
    var update = {Randomness: req.body.levelFeedback};
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    levelFeedback.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
            res.redirect('/games/randomness');
        } else {
            res.redirect('/games/randomness');
        }
    });
});

router.post('/simpleDAO', function(req, res, next) {
    var query = { Session: req.sessionID};
    var update = {SimpleDAO: req.body.levelFeedback};
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    levelFeedback.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
            res.redirect('/games/simpleDAO');
        } else {
            res.redirect('/games/simpleDAO');
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