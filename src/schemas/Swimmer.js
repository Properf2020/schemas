const mongoose = require('mongoose');

const swimmerSchema = new mongoose.Schema({
  idFFN: {
    type: Number,
    required: [true, 'Un swimmer doit avoir un id FFN'],
    unique: [true, 'ID FNN déjà utilisé'],
    index: true
  },
  firstName: {
    type: String,
    required: [true, 'Un swimmer doit avoir un prénom'],
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: [true, 'Un swimmer doit avoir un nom'],
    trim: true,
    lowercase: true,
  },
  sex: {
    type: String,
    required: [true, 'Un swimmer doit avoir un sexe'],
    trim: true,
    enum: ['M', 'F'],
  },
  birthDate: {
    type: Date,
    required: [true, 'Un swimmer doit avoir un date de naissance'],
  },
  seniority: {
    type: Number,
    index: true
  },
  clubs: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Club',
    },
  ],
  courses: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
    },
  ],
  records: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'SwimmerRecord',
    },
  ],
  marges: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'SwimmerMarge',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

swimmerSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'clubs',
    select: '_id name departement region idFfn',
  });

  next();
});

swimmerSchema.index({ firstName: 'text', lastName: 'text' });
swimmerSchema.pre('save', function (next) {
  this.marges = _.uniq(this.marges);
  this.records = _.uniq(this.records);
  this.courses = _.uniq(this.courses);
  this.clubs = _.uniq(this.clubs);
  next();
});

const Swimmer = mongoose.model('Swimmer', swimmerSchema);

module.exports = Swimmer;
