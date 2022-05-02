const {findTeams, findTeam, findTeamId} = require('../repository/team.repository');

const getTeams = async (req, res) => {
  const dataTeams = await findTeams();
  
  if(!dataTeams) {
    return res.status(404).send('not found');
  };
  
  res.json(dataTeams);
}

const getTeam = async (req, res) => {
  const nameTeam = req.query.name;
  const dataTeam = await findTeam(nameTeam);
  
  if(!dataTeam) {
    return res.status(404).send('not found');
  };
  
  res.json(dataTeam);
}

const getTeamId = async (req, res) => {
  const idTeam = req.query.id;
  const dataTeamPartId = await findTeamId(idTeam);
  
  if(!dataTeamPartId) {
    return res.status(404).send('not found');
  };
  
  res.json(dataTeamPartId);
}

module.exports = {
  getTeams,
  getTeam,
  getTeamId
};