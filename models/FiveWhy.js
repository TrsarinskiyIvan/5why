const mongoose = require('mongoose');
const { Schema } = mongoose;

const fiveWhySchema = new Schema({
    user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    },

    numberShift: Number,

    date: {
        type: Date,
        default: Date.now
    },

    problem: String,

    lineName: String,

    qcdm: String,

    reason: String,

    why1: String,

    why2: String,

    why3: String,

    why4: String,

    why5: String,

    rca: String,

    correctionAction: String,

    correctionWho: String,

    correctionWhen: Date,
});

module.exports = mongoose.model('fiveWhys', fiveWhySchema);