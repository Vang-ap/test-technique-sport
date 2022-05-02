const {findLeague, findLeagues} = require('../repository/league.repository.js');

const getLeagues = async(req, res) => {
  const dataLeagues = await findLeagues();
  
  if(!dataLeagues) {
    return res.status(404).send('not found');
  }
  
  res.json(dataLeagues);
}

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
  getLeague
}