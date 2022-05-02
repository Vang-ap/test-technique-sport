const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  _id: String,
  name: String,
  thumbnail: String,
  players: []
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;