const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  thumbnail: String,
  players: []
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;