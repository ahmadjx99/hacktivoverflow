const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const userSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Nama tidak boleh kosong']
  },
  password: {
    type: String,
    required: [true, 'Password tidak boleh kosong']
  },
  email: {
    type: String,
    required: true,
    validate: function(v) {
      return validator.isEmail(v);
    }
  }
}, {
  timestamps: true
});

const User  = mongoose.model('User', userSchema);

module.exports = User;
