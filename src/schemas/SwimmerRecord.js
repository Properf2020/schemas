const mongoose = require('mongoose');

const swimmerRecordSchema = new mongoose.Schema({
  type: {
    bassin: {
      type: String,
      enums: ['25M', '50M'],
    },
    nage: {
      type: String,
      enums: ['NAGE_LIBRE', 'BRASSE', 'DOS', 'PAPILLON', 'QUATRE_NAGES'],
    },
    distance: {
      type: String,
      enums: ['50M', '100M', '200M', '400M', '800M', '1500M'],
    },
  },
  season: {
    type: Number,
    min: [1900, 'La saison ne peut être inférieur à 1900'],
    max: [
      new Date().getFullYear() + 1,
      `La saison ne peut être supérieur à ${new Date().getFullYear() + 1}`,
    ],
  },
  swimmer: {
    type: mongoose.Schema.ObjectId,
    ref: 'swimmer',
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'course',
  },
});

swimmerRecordSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'swimmer',
    select: '_id firstName lastName sex birthDate idFFn',
  });

  this.populate({
    path: 'course',
    select: '_id type date season time notes swimmerAge swimmerCategory ',
  });

  next();
});

const SwimmerRecord = mongoose.model('swimmer_record', swimmerRecordSchema);

module.exports = SwimmerRecord;
