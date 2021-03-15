const mongoose = require('mongoose');

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
  ressenti: [{ type: String, unique: true }],
  periodes: [{ name: String, dateStart: Date, dateEnd: Date }],
  bilans: [
    {
      name: String,
      variable: { type: mongoose.Schema.ObjectId, ref: 'preference.variables' },
      methode: { type: String, enum: ['diag', 'cumul', 'avg'] },
    },
  ],
  ensembles: [
    {
      name: String,
      seances: [{ type: mongoose.Schema.ObjectId, ref: 'preference.seances' }],
    },
  ],
  seances: [
    {
      name: String,
      ensemble: { type: mongoose.Schema.ObjectId, ref: 'preference.ensembles' },
      blocks: [
        {
          variables: [
            {
              variable: {
                type: mongoose.Schema.ObjectId,
                ref: 'preference.variables',
              },
              defaultValue: String,
            },
          ],
          rep: Number,
        },
      ],
    },
  ],
  variables: [
    {
      name: String,
      type: {
        type: String,
        enum: [
          'number',
          'text',
          'boolean',
          'arrayNumber',
          'arrayText',
          'varComp',
        ],
      },
      arrayValues: [mongoose.Schema.Types.Mixed],
      variablesComp: [mongoose.Schema.Types.Mixed],
    },
  ],
});

preferenceSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'seances.ensemble',
    model: 'preference',
    select: 'name',
  });
  this.populate({
    path: 'seances.blocks.variables.variable',
    model: 'preference',
    select: 'name arrayValues',
  });
  this.populate({
    path: 'bilans.variables',
    model: 'preference',
    select: 'name arrayValues',
  });

  next();
});

const Preference = mongoose.model('preference', preferenceSchema);

module.exports = Preference;
