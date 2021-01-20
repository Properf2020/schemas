const mongoose = require('mongoose');
const _ = require('lodash');
const enums = require('../enums/enums');

const sessionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Une session doit avoir une date'],
    },
    from: {
        type: String,
        required: [true, 'Une session doit avoir une heure de début'],
    },
    to: {
        type: String,
        required: [true, 'Une session doit avoir une heure de fin'],
    },
    teacher: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    },
    club: {
        type: mongoose.Schema.ObjectId,
        ref: 'club',
    },
    group: {
        type: Number,
        required: [true, 'Une session doit avoir un groupe'],
    },
    attendances: [{
        state: {
            type: [String],
            enum: ['ATTENDED', 'ABSENT', 'UNKNOWN'],
            default: ['UNKNOWN'],
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
        },
    }]
});

sessionSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'teacher',
        select: '_id firstName lastName',
    });

    this.populate({
        path: 'attendances.user',
        select:
            '_id firstName lastName',
    });

    next();
});

const Session = mongoose.model('session', sessionSchema);

module.exports = Session;
