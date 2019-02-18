var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Gender: {type: String, required: false},
    Nationality: {type: String, required: false},
    University: {type: String, required: false},
    Occupation: {type: String, required: false},
    ProgramingExp: {type: String, required: false},
    Ethereum: {type: String, required: false},
    Solidity: {type: String, required: false},
    OverallImpression: {type: String, required: false},
    Navigate: {type: String, required: false},
    Instructions: {type: String, required: false},
    Understand: {type: String, required: false},
    Interact: {type: String, required: false},
    Help: {type: String, required: false},
    TeachingAbility: {type: String, required: false},
    ChallengesImproved: {type: String, required: false},
    OverallImproved: {type: String, required: false},
    OtherFeedback: {type: String, required: false}
});

module.exports = mongoose.model('survey', schema);