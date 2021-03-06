var express = require('express');
var router = express.Router();
var survey = require('../models/survey');

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

router.get('/metamask', function(req, res, next) {
    res.render('info/metaMask', { title: 'Solidity Games' });
});

router.get('/survey', function(req, res, next) {
    res.render('pages/survey', { title: 'Solidity Games' });
});

router.post('/survey', function (req, res, next) {
    var query = { Session: req.sessionID};
    var update = {
        Gender: req.body.Gender,
        Nationality: req.body.Nationality,
        University: req.body.University,
        Occupation: req.body.Occupation,
        ProgramingExp: req.body.ProgramingExp,
        ProgramingLang: req.body.ProgramingLang,
        Ethereum: req.body.Ethereum,
        Solidity: req.body.Solidity,
        OverallImpression: req.body.OverallImpression,
        Navigate: req.body.Navigate,
        Instructions: req.body.Instructions,
        Understand: req.body.Understand,
        Interact: req.body.Interact,
        Help: req.body.Help,
        TeachingAbility: req.body.TeachingAbility,
        ImprovedInterest: req.body.ImprovedInterest,
        ChallengesImproved: req.body.ChallengesImproved,
        OverallImproved: req.body.OverallImproved,
        OtherFeedback: req.body.OtherFeedback,
        LocalStorage: req.body.LocalStorage
    };
    var options = {upsert: true, new: true, setDefaultsOnInsert: true};
    survey.findOneAndUpdate(query, update, options, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
            res.redirect('/survey');
        } else {
            res.redirect('/');
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