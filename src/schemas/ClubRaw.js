const mongoose = require('mongoose');
const _ = require('lodash');

const clubRawSchema = new mongoose.Schema({
  departement: {
    type: String,
    required: [true, 'Un club doit avoir un département'],
  },
  region: {
    type: String,
    required: [true, 'Un club doit avoir une région'],
  },
  clubID: {
    type: String,
    required: [true, 'Un club doit avoir un id ffn'],
    unique: [true, 'ID FNN déjà utilisé'],
  },
  clubName: {
    type: String,
    required: [true, 'Un club doit avoir un nom'],
  },
  idSwimmers: [String],
});

clubRawSchema.pre('save', function (next) {
  this.idSwimmers = _.uniq(this.idSwimmers);
  next();
});

const ClubRaw = mongoose.model('ClubRaw', clubRawSchema);

module.exports = ClubRaw;
