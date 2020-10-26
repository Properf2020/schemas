const mongoose = require('mongoose');

const statsCountrySchema = new mongoose.Schema({
  country: {
    type: String,
    enums: ['FRANCE'],
    default: 'FRANCE',
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
        ref: 'courses',
      },
      minPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'courses',
      },
      variancePerf: Number,
      moyenneMarges: Number,
      maxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer-marge',
      },
      minMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer-marge',
      },
      varianceMarges: Number,
      numCurrentCourses: Number,
      currentMoyennePerf: Number,
      currentMaxPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'courses',
      },
      currentMinPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'courses',
      },
      currentVariancePerf: Number,
      currentMoyenneMarges: Number,
      currentMaxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer-marge',
      },
      currentMinMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer-marge',
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
        ref: 'courses',
      },
      minPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'courses',
      },
      variancePerf: Number,
      moyenneMarges: Number,
      maxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer-marge',
      },
      minMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer-marge',
      },
      varianceMarges: Number,
      numCurrentCourses: Number,
      currentMoyennePerf: Number,
      currentMaxPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'courses',
      },
      currentMinPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'courses',
      },
      currentVariancePerf: Number,
      currentMoyenneMarges: Number,
      currentMaxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer-marge',
      },
      currentMinMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer-marge',
      },
      currentVarianceMarges: Number,
    },
  ],
});

statsCountrySchema.pre(/^find/, function (next) {
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

const StatsCountry = mongoose.model('stats-country', statsCountrySchema);

module.exports = StatsCountry;
