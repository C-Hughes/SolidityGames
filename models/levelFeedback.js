var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Session: {type: String, required: false},
    WarmUp: {type: String, required: false},
    Rubixi: {type: String, required: false},
    Odometer: {type: String, required: false},
    KeepingSecrets: {type: String, required: false},
    ExternalFactors: {type: String, required: false},
    ForcedPayments: {type: String, required: false},
    Randomness: {type: String, required: false},
    SimpleDAO: {type: String, required: false}
});

module.exports = mongoose.model('levelFeedback', schema);