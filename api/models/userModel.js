const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'Please add a username.'],
      unique: true, // `user` must be unique
    },
    pass: {
      type: String,
      required: [true, 'Please add a Password.'],
    },
    cities: {
      type: Array,
      required: [true, 'Not receiving the default 5-city array.'],
    },
  }, { timestamps: true }
)

module.exports = mongoose.model('User', userSchema);