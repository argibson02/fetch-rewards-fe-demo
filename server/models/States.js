const { Schema, model } = require('mongoose');

const statesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  abbreviation: {
    type: String,
    required: true,
    unique: true
  }
});

const States = model('states', statesSchema);

module.exports = States;
