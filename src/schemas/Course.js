const mongoose = require('mongoose');
const _ = require('lodash');
const enums = require('../enums/enums');

const courseSchema = new mongoose.Schema({
  type: {
    bassin: {
      type: String,
      enums: ['25M', '50M'],
      required: [true, 'Une course doit avoir une taille de bassin'],
      index: true
    },
    nage: {
      type: String,
      enums: ['NAGE_LIBRE', 'BRASSE', 'DOS', 'PAPILLON', 'QUATRE_NAGES'],
      required: [true, 'Une course doit avoir un type de nage'],
      index: true
    },
    distance: {
      type: String,
      enums: ['50M', '100M', '200M', '400M', '800M', '1500M'],
      required: [true, 'Une course doit avoir une distance'],
      index: true
    },
  },
  time: {
    type: Number,
    required: [true, 'Une course doit avoir un temps'],
    index: true
  },
  tempsPassages: {
    type: Map,
    of: Number,
  },
  date: {
    type: Date,
    required: [true, 'Une course doit avoir une date'],
    index: true
  },
  season: {
    type: Number,
    min: [2000, 'La saison ne peut être inférieur à 2000'],
    max: [
      new Date().getFullYear() + 1,
      `La saison ne peut être supérieur à ${new Date().getFullYear() + 1}`,
    ],
    required: [true, 'Une course doit avoir une saison'],
    index: true
  },
  place: { type: String, lowercase: true, trim: true },
  niveauCompetition: {
    type: String,
    enums: ['DEP', 'REG', 'NAT', 'ZON', 'INT'],
    index: true
    // required: [true, 'Une course doit avoir un niveau de compétition'],
  },
  swimmer: {
    type: mongoose.Schema.ObjectId,
    ref: 'Swimmer',
    required: [true, 'Une course doit avoir un nageur'],
    index: true
  },
  club: {
    name: {
      type: String,
      required: [true, 'Un club doit avoir un nom'],
      trim: true,
      // unique: [true, 'Nom de club déjà existant'],
    },
    _id: {
      type: mongoose.Types.ObjectId,
      ref: 'Club',
      required: [true, 'Un club doit avoir un identifiant FFN'],
      index: true
    },
    departement: {
      type: String,
      required: [true, 'Un club doit avoir un département'],
      trim: true,
      enum: enums.EDepartement,
      index: true
    },
    region: {
      type: String,
      required: [true, 'Un club doit avoir un région'],
      trim: true,
      enum: enums.ERegion,
      index: true
    },
    country: {
      type: String,
      trim: true,
      enum: ['FRANCE'],
      default: 'FRANCE',
      index: true
    },
  },
  notes: {
    country: Number,
    region: Number,
    departement: Number,
    club: Number,
  },
  swimmerAge: {
    type: Number,
    required: [true, "L'age du nageur doit etre fourni"],
    index: true
  },
  swimmerCategory: {
    type: String,
    required: [true, 'La catégory du nageur doit etre fournie'],
    enums: ['AVENIRS', 'JEUNES', 'JUNIORS', 'SENIORS'],
    index: true
  },
  swimmerSex: {
    type: String,
    required: [true, 'Le sexe du nageur doit etre fournie'],
    enums: ['F', 'M'],
    index: true
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

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
