const League = require('../models/league.model');

// récupérer une league
const findLeague = async name => {
  const league = await League.findOne({name})
  return league
}

module.exports = findLeague
