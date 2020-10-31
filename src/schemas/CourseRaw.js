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

courseRawSchema.index({ 'userID': 1, 'clubID': 1, 'date': 1, 'course': 1 }, { unique: true });
courseRawSchema.index({ 'club': 1 });
courseRawSchema.index({ 'userID': 1 });
courseRawSchema.index({ 'clubID': 1 });

const CourseRaw = mongoose.model('course_raw', courseRawSchema);

module.exports = CourseRaw;
