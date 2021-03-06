const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  players: [],
  _id: String,
  name: String,
  position: String,
  thumbnail: String,
  signin: {
    amount: Number,
    currency: String
  },
  born: String,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;