const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Renseignez un prénom'],
    trim: true,
    lowercase: true,
    maxlength: [30, 'Un prénom ne doit pas contenir plus de 30 caractères'],
    minlength: [3, 'Un prénom doit contenir au moins 3 caractères'],
  },
  lastName: {
    type: String,
    required: [true, 'Renseignez un nom'],
    trim: true,
    lowercase: true,
    maxlength: [30, 'Un nom ne doit pas contenir plus de 30 caractères'],
    minlength: [3, 'Un nom doit contenir au moins 3 caractères'],
  },
  roles: {
    type: [String],
    enum: ['user', 'teacher', 'admin', 'super-admin'],
    default: ['user'],
  },
  teacher: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
  },
  swimmer: {
    type: mongoose.Schema.ObjectId,
    ref: 'swimmer',
  },
  club: {
    type: mongoose.Schema.ObjectId,
    ref: 'club',
  },
  group: Number,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Email nom valide'],
  },
  phone: {
    type: String,
    lowercase: true,
    trim: true,
    validate: [validator.isMobilePhone, 'Numéro de téléphone nom valide'],
  },
  password: {
    type: String,
    required: [true, 'Renseignez un mot de passe'],
    minlength: [8, 'Un mot de passe doit contenir au moins 8 caractères'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Vous devez confirmer votre mot de passe'],
    validate: {
      //This only works on CREAT & SAVE!!
      validator: function (el) {
        return el === this.password;
      },
      message: 'Mots de passes différents',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpire: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'teacher',
    select: '_id sex firstName lastName',
  });

  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  // this point to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (candidatePW, userPW) {
  return await bcrypt.compare(candidatePW, userPW);
};

userSchema.methods.changedPWAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

userSchema.methods.createPWResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  //console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};
const User = mongoose.model('user', userSchema);

module.exports = User;
