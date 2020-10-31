const mongoose = require('mongoose');
const _ = require('lodash');
const enums = require('../enums/enums');

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Un club doit avoir un nom'],
    trim: true,
    // unique: [true, 'Nom de club déjà existant'],
  },
  idFFN: {
    type: Number,
    required: [true, 'Un club doit avoir un identifiant FFN'],
    unique: [true, 'ID FNN déjà utilisé'],
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
  },
  plan: {
    type: String,
    enum: ['BASE'],
    default: 'BASE',
    index: true
  },
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
  ],
  swimmers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'swimmer',
    },
  ],
  bills: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'bill',
    },
  ],
});

clubSchema.index({ name: 'text' });

clubSchema.pre('save', function (next) {
  this.bills = _.uniq(this.bills);
  this.swimmers = _.uniq(this.swimmers);
  this.users = _.uniq(this.users);
  next();
});

const Club = mongoose.model('club', clubSchema);

module.exports = Club;
