const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
  _id: String,
  name: String,
  sport: String,
  teams: []
});

const League = mongoose.model('League', leagueSchema);

module.exports = League;