const League = require('../models/league.model');

// récupérer les leagues
const findLeagues = async () => {
  const leagues = await League.find()
  return leagues
}

// récupérer une league
const findLeague = async name => {
  const league = await League.findOne({name})
  return league
}

module.exports = {
  findLeagues,
  findLeague
} 
