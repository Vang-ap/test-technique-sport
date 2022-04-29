const findLeague = require('../repository/league.repository.js');

const getLeague = async (req, res) => {
  const nameLeague = req.query.name;
  const dataLeague = await findLeague(nameLeague);
  
  if(!dataLeague) {
    return res.status(404).send('not found');
  }
  
  res.json(dataLeague);
}

module.exports = getLeague;