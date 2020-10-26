const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  type: {
    bassin: {
      type: String,
      enums: ['25M', '50M'],
      required: [true, 'Une course doit avoir une taille de bassin'],
    },
    nage: {
      type: String,
      enums: ['NAGE_LIBRE', 'BRASSE', 'DOS', 'PAPILLON', 'QUATRE_NAGES'],
      required: [true, 'Une course doit avoir un type de nage'],
    },
    distance: {
      type: String,
      enums: ['50M', '100M', '200M', '400M', '800M', '1500M'],
      required: [true, 'Une course doit avoir une distance'],
    },
  },
  time: { type: Number, required: [true, 'Une course doit avoir un temps'] },
  tempsPassages: {
    type: Map,
    of: Number,
  },
  date: { type: Date, required: [true, 'Une course doit avoir une date'] },
  season: {
    type: Number,
    min: [2000, 'La saison ne peut être inférieur à 2000'],
    max: [
      new Date().getFullYear() + 1,
      `La saison ne peut être supérieur à ${new Date().getFullYear() + 1}`,
    ],
    required: [true, 'Une course doit avoir une saison'],
  },
  place: String,
  niveauCompetition: {
    type: String,
    enums: ['DEP', 'REG', 'NAT', 'ZON', 'INT'],
    required: [true, 'Une course doit avoir un niveau de compétition'],
  },
  swimmer: {
    type: mongoose.Schema.ObjectId,
    ref: 'swimmer',
    required: [true, 'Une course doit avoir un nageur'],
  },
  club: {
    type: mongoose.Schema.ObjectId,
    ref: 'club',
    required: [true, 'Une course doit avoir un club'],
  },
  notes: {
    country: Number,
    region: Number,
    departement: Number,
    club: Number,
  },
});

courseSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'swimmer',
    select: '_id sex firstName lastName',
  });

  next();
});

courseSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'club',
    select: '_id name departement region',
  });

  next();
});

const Course = mongoose.model('courses', courseSchema);

module.exports = Course;
