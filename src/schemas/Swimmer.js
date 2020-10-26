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
      ref: 'club',
    },
  ],
  courses: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'courses',
    },
  ],
  records: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'swimmer-record',
    },
  ],
  marges: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'swimmer-marge',
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

const Swimmer = mongoose.model('swimmer', swimmerSchema);

module.exports = Swimmer;
