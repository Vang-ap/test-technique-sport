const findTeam = require('../repository/team.repository');

const getTeam = async (req, res) => {
  const nameTeam = req.query.name;
  const dataTeam = await findTeam(nameTeam);
  
  if(!dataTeam) {
    return res.status(404).send('not found');
  };
  
  res.json(dataTeam);
}

module.exports = getTeam;