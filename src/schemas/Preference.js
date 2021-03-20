const mongoose = require('mongoose');

const ressentiSchema = new mongoose.Schema({ question: String });
const periodeSchema = new mongoose.Schema({
  name: String,
  dateStart: Date,
  dateEnd: Date,
});
const bilanSchema = new mongoose.Schema({
  name: String,
  variable: {
    type: mongoose.Schema.Types.Mixed,
  },
  methode: { type: String, enum: ['diag', 'cumul', 'avg'] },
});
const ensembleSchema = new mongoose.Schema({
  name: String,
});
const seanceSchema = new mongoose.Schema({
  name: String,
  ensemble: {
    type: mongoose.Schema.Types.Mixed,
  },
  blocks: [
    {
      sequences: [
        {
          variables: [
            {
              variable: {
                type: mongoose.Schema.Types.Mixed,
              },
              defaultValue: String,
            },
          ],
        },
      ],
      rep: Number,
    },
  ],
});
const variableSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ['number', 'text', 'boolean', 'arrayNumber', 'arrayText', 'varComp'],
  },
  arrayValues: [mongoose.Schema.Types.Mixed],
  variablesComp: [mongoose.Schema.Types.Mixed],
});

const preferenceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: [true, 'Une préférences doit avoir un utilisateur'],
    index: true,
  },
  club: {
    type: mongoose.Schema.ObjectId,
    ref: 'club',
    required: [true, 'Une préférences doit avoir un club'],
    index: true,
  },
  ressenti: [ressentiSchema],
  periodes: [periodeSchema],
  bilans: [bilanSchema],
  ensembles: [ensembleSchema],
  seances: [seanceSchema],
  variables: [variableSchema],
});

const Preference = mongoose.model('preference', preferenceSchema);

module.exports = Preference;
