const mongoose = require('mongoose');

const swimmerSchema = new mongoose.Schema({
  idFFn: {
    type: Number,
    required: [true, 'Un swimmer doit avoir un id FFN'],
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
  seniority: Number,
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
});

swimmerSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'clubs',
    select: '_id name departement region idFfn',
  });

  next();
});

const Swimmer = mongoose.model('Swimmer', swimmerSchema);

module.exports = Swimmer;
