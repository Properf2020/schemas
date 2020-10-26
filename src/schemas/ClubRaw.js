const mongoose = require('mongoose');

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
  },
  clubName: {
    type: String,
    required: [true, 'Un club doit avoir un nom'],
  },
});

const ClubRaw = mongoose.model('club-raw', clubRawSchema);

module.exports = ClubRaw;