const mongoose = require('mongoose');

const swimmerMargeSchema = new mongoose.Schema({
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
    min: [2000, 'La saison ne peut être inférieur à 2000'],
    max: [
      new Date().getFullYear() + 1,
      `La saison ne peut être supérieur à ${new Date().getFullYear() + 1}`,
    ],
  },
  swimmer: {
    type: mongoose.Schema.ObjectId,
    ref: 'swimmers',
  },
  marge: {
    type: Number,
    required: [true, 'Marge missing'],
  },
});

swimmerMargeSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'swimmer',
    select: '_id firstName lastName sex birthDate idFFn',
  });

  next();
});

const SwimmerMarge = mongoose.model('swimmer-marge', swimmerMargeSchema);

module.exports = SwimmerMarge;
