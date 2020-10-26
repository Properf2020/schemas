const mongoose = require('mongoose');

const enums = require('../enums/enums');

const statsRegionSchema = new mongoose.Schema({
  region: {
    type: String,
    enums: enums.ERegion,
    required: [true, 'Une region doit être renseignée'],
  },
  course: {
    bassin: {
      type: String,
      enums: ['25M', '50M'],
      required: [true, 'Un bassin doit être renseigné'],
    },
    nage: {
      type: String,
      enums: ['NAGE_LIBRE', 'BRASSE', 'DOS', 'PAPILLON', 'QUATRE_NAGES'],
      required: [true, 'Une nage doit être renseignée'],
    },
    distance: {
      type: String,
      enums: ['50M', '100M', '200M', '400M', '800M', '1500M'],
      required: [true, 'Une distance doit être renseignée'],
    },
  },
  statsByAge: [
    {
      age: Number,
      numCourses: Number,
      moyennePerf: Number,
      maxPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
      minPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
      variancePerf: Number,
      moyenneMarges: Number,
      maxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'SwimmerMarge',
      },
      minMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'SwimmerMarge',
      },
      varianceMarges: Number,
      numCurrentCourses: Number,
      currentMoyennePerf: Number,
      currentMaxPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
      currentMinPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
      currentVariancePerf: Number,
      currentMoyenneMarges: Number,
      currentMaxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'SwimmerMarge',
      },
      currentMinMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'SwimmerMarge',
      },
      currentVarianceMarges: Number,
    },
  ],
  statsByCategory: [
    {
      category: {
        type: String,
        enums: ['AVENIRS', 'JEUNES', 'JUNIORS', 'SENIORS'],
      },
      numCourses: Number,
      moyennePerf: Number,
      maxPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
      minPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
      variancePerf: Number,
      moyenneMarges: Number,
      maxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'SwimmerMarge',
      },
      minMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'SwimmerMarge',
      },
      varianceMarges: Number,
      numCurrentCourses: Number,
      currentMoyennePerf: Number,
      currentMaxPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
      currentMinPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
      currentVariancePerf: Number,
      currentMoyenneMarges: Number,
      currentMaxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'SwimmerMarge',
      },
      currentMinMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'SwimmerMarge',
      },
      currentVarianceMarges: Number,
    },
  ],
});

statsRegionSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'statsByAge.maxPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByAge.minPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByAge.maxMarge',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByAge.minMarge',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByAge.currentMaxPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByAge.currentMinPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByAge.currentMaxMarge',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByAge.currentMinMarge',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByCategory.maxPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByCategory.minPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByCategory.maxMarge',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByCategory.minMarge',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByCategory.currentMaxPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByCategory.currentMinPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByCategory.currentMaxMarge',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  this.populate({
    path: 'statsByCategory.currentMinMarge',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes',
  });

  next();
});

const StatsRegion = mongoose.model('stats-region', statsRegionSchema);

module.exports = StatsRegion;
