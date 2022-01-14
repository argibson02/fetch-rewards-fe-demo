const { Schema, model } = require('mongoose');

const occupationsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
});

const Occupations = model('occupations', occupationsSchema);

module.exports = Occupations;
