const {findLeague, findLeagues, findOneByLeagueId} = require('../repository/league.repository.js');

// get all leagues
const getLeagues = async(req, res) => {
  const dataLeagues = await findLeagues();
  
  if(!dataLeagues) {
    return res.status(404).send('not found');
  }
  
  res.json(dataLeagues);
}

// get a league by id
const getLeagueId = async (req, res) => {
  const idLeague = req.params.id;
  
  console.log(idLeague)
  
  const dataLeaguePartId = await findOneByLeagueId(idLeague);
  
  if(!dataLeaguePartId) {
    return res.status(404).send('not found');
  }
  
  res.json(dataLeaguePartId);
}

// get a league by name
const getLeague = async (req, res) => {
  const nameLeague = req.query.name;
  const dataLeague = await findLeague(nameLeague);
  
  if(!dataLeague) {
    return res.status(404).send('not found');
  }
  
  res.json(dataLeague);
}

module.exports = {
  getLeagues,
  getLeague,
  getLeagueId
}