const mongoose = require('mongoose');
const _ = require('lodash');
const enums = require('../enums/enums');

const seanceSchema = new mongoose.Schema({
  ensemble: {
    type: mongoose.Schema.Types.Mixed,
  },
  preferences: mongoose.Schema.Types.Mixed,
  blocks: [
    {
      sequences: [
        {
          variables: [
            {
              variable: mongoose.Schema.Types.Mixed,
              value: mongoose.Schema.Types.Mixed,
            },
          ],
        },
      ],
      rep: Number,
    },
  ],
});

const sessionSchema = new mongoose.Schema({
  date: {
    type: Date,
    // required: [true, 'Une session doit avoir une date'],
  },
  from: {
    type: String,
    // required: [true, 'Une session doit avoir une heure de début'],
  },
  to: {
    type: String,
    // required: [true, 'Une session doit avoir une heure de fin'],
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
  attendances: [
    {
      state: {
        type: String,
        enum: ['ATTENDED', 'ABSENT', 'LATE', 'UNKNOWN'],
        default: ['UNKNOWN'],
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
      },
    },
  ],
  seance: [seanceSchema],
});

sessionSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'teacher',
    select: '_id firstName lastName',
  });

  this.populate({
    path: 'attendances.user',
    select: '_id firstName lastName',
  });

  next();
});

const Session = mongoose.model('session', sessionSchema);

module.exports = Session;
