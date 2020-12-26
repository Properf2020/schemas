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
    type: Number,
    default: 0,
    min: 0,
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
  billing: {
    type: {
      type: String,
      trim: true,
      enum: ['PARTICULAR', 'PROFESSIONAL'],
      default: 'PARTICULAR',
    },
    name: {
      type: String,
      trim: true
    },
    siret: {
      type: String,
      trim: true
    },
    phone: {
      type: String,
      trim: true
    },
    fax: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true
    },
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    zipcode: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    country: {
      type: String,
      trim: true
    },
    tva: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      trim: true
    },
  },
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
