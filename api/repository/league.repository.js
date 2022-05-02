const League = require('../models/league.model');

// find all leagues
const findLeagues = async () => {
  const leagues = await League.find()
  return leagues
}

// find a league by name
const findLeague = async name => {
  const league = await League.findOne({name})
  return league
}

// find a league by id
const findOneByLeagueId = async idLeague => {
  const leaguePartId = await League.findOne({_id: idLeague});

  return leaguePartId;
}

module.exports = {
  findLeagues,
  findLeague,
  findOneByLeagueId
} 
