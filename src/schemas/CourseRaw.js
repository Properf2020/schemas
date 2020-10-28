const mongoose = require('mongoose');

const courseRawSchema = new mongoose.Schema({
  course: {
    type: String,
    required: [true, 'Une course doit avoir un type'],
  },
  distance: {
    type: String,
    required: [true, 'Un course doit avoir une distance'],
  },
  sexeNageur: {
    type: Number,
    required: [true, 'Le nageur de la course doit avoir un sexe'],
  },
  nom: {
    type: String,
    required: [true, 'Le nageur de la course doit avoir un nom'],
  },
  prenom: {
    type: String,
    required: [true, 'Le nageur de la course doit avoir un prénom'],
  },
  club: {
    type: String,
    required: [true, 'La course doit avoir un club'],
  },
  clubID: Number,
  tailleBassin: {
    type: String,
    required: [true, 'La course doit avoir une taille de bassin'],
  },
  temps: {
    type: String,
    required: [true, 'La course doit avoir un temps'],
  },
  date: {
    type: String,
    required: [true, 'La course doit avoir une date'],
  },
  ville: {
    type: String,
  },
  dateNaissance: {
    type: String,
    required: [true, 'Le nageur de la course doit avoir une date de naissance'],
  },
  userID: {
    type: String,
    required: [true, 'Le nageur de la course doit avoir un id ffn'],
  },
  age: Number,
  niveauCompetition: {
    type: String,
    required: [true, 'La course doit avoir un niveau'],
  },
  tempsPassages: {
    type: Map,
    of: String,
  },
});

const CourseRaw = mongoose.model('course-raws', courseRawSchema);

module.exports = CourseRaw;
