const mongoose = require('mongoose');

const enums = require('../enums/enums');

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Un club doit avoir un nom'],
    unique: [true, 'Nom de club déjà existant'],
  },
  idFfn: {
    type: Number,
    required: [true, 'Un club doit avoir un identifiant FFN'],
    unique: [true, 'ID FNN déjà utilisé'],
  },
  departement: {
    type: String,
    required: [true, 'Un club doit avoir un département'],
    trim: true,
    enum: enums.EDepartement,
  },
  region: {
    type: String,
    required: [true, 'Un club doit avoir un région'],
    trim: true,
    enum: enums.ERegion,
  },
  Country: {
    type: String,
    required: [true, 'Un club doit avoir un pays'],
    trim: true,
    enum: ['FRANCE'],
  },
  plan: {
    type: String,
    enum: ['BASE'],
    default: 'BASE',
  },
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'users',
    },
  ],
  swimmers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'swimmers',
    },
  ],
  bills: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Bill',
    },
  ],
});

const Club = mongoose.model('club', clubSchema);

module.exports = Club;
