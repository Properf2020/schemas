const mongoose = require('mongoose');

const statsClubSchema = new mongoose.Schema({
  club: {
    type: mongoose.Schema.ObjectId,
    ref: 'club',
    required: [true, 'Un club doit être renseigné'],
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
  sex: {
    type: String,
    enums: ['F', 'M'],
    required: [true, 'Un sexe doit être renseigné'],
  },
  type: {
    type: String,
    enums: ['PERF', 'MARGE', 'NOTE'],
    required: [true, 'Un type doit être renseigné'],
  },
  periode: {
    type: String,
    enums: ['CURRENT', 'ALL_TIMES'],
    required: [true, 'Une periode doit être renseignée'],
  },
  statsByAge: [
    {
      age: Number,
      numCourses: Number,
      moyennePerf: Number,
      maxPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'course',
      },
      minPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'course',
      },
      variancePerf: Number,
      moyenneMarges: Number,
      maxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer_marge',
      },
      minMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer_marge',
      },
      varianceMarges: Number,
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
        ref: 'course',
      },
      minPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'course',
      },
      variancePerf: Number,
      moyenneMarges: Number,
      maxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer_marge',
      },
      minMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer_marge',
      },
      varianceMarges: Number,
    },
  ],
  statsByNote: [
    {
      note: Number,
      numCourses: Number,
      moyennePerf: Number,
      maxPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'course',
      },
      minPerf: {
        type: mongoose.Schema.ObjectId,
        ref: 'course',
      },
      variancePerf: Number,
      moyenneMarges: Number,
      maxMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer_marge',
      },
      minMarges: {
        type: mongoose.Schema.ObjectId,
        ref: 'swimmer_marge',
      },
      varianceMarges: Number,
    },
  ],
});

statsClubSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'statsByAge.maxPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes swimmerAge swimmerCategory flag',
  });

  this.populate({
    path: 'statsByAge.minPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes swimmerAge swimmerCategory flag',
  });

  this.populate({
    path: 'statsByAge.maxMarges',
    select:
      '_id swimmer marge date season swimmerAge swimmerCategory swimmerSex club course swimmerAge swimmerCategory flagUniq',
  });

  this.populate({
    path: 'statsByAge.minMarges',
    select:
      '_id swimmer marge date season swimmerAge swimmerCategory swimmerSex club course swimmerAge swimmerCategory flagUniq',
  });

  this.populate({
    path: 'statsByCategory.maxPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes swimmerAge swimmerCategory flag',
  });

  this.populate({
    path: 'statsByCategory.minPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes swimmerAge swimmerCategory flag',
  });

  this.populate({
    path: 'statsByCategory.maxMarges',
    select:
      '_id swimmer marge date season swimmerAge swimmerCategory swimmerSex club course swimmerAge swimmerCategory flagUniq',
  });

  this.populate({
    path: 'statsByCategory.minMarges',
    select:
      '_id swimmer marge date season swimmerAge swimmerCategory swimmerSex club course swimmerAge swimmerCategory flagUniq',
  });

  this.populate({
    path: 'statsByNote.maxPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes swimmerAge swimmerCategory flag',
  });

  this.populate({
    path: 'statsByNote.minPerf',
    select:
      '_id swimmer time tempsPassages date season niveauCompetition club notes swimmerAge swimmerCategory flag',
  });

  this.populate({
    path: 'statsByNote.maxMarges',
    select:
      '_id swimmer marge date season swimmerAge swimmerCategory swimmerSex club course swimmerAge swimmerCategory flagUniq',
  });

  this.populate({
    path: 'statsByNote.minMarges',
    select:
      '_id swimmer marge date season swimmerAge swimmerCategory swimmerSex club course swimmerAge swimmerCategory flagUniq',
  });
  next();
});

const StatsClub = mongoose.model('stat_club', statsClubSchema);

module.exports = StatsClub;
