const {findTeams, findTeam, findOneByTeamId} = require('../repository/team.repository');

// get all teams
const getTeams = async (req, res) => {
  const dataTeams = await findTeams();
  
  if (!dataTeams) {
    return res.status(404).send('not found');
  };
  
  res.json(dataTeams);
}

// get a team by name
const getTeam = async (req, res) => {
  const nameTeam = req.query.name;
  const dataTeam = await findTeam(nameTeam);
  
  if (!dataTeam) {
    return res.status(404).send('not found');
  };
  
  res.json(dataTeam);
}

// get a team by id
const getTeamId = async (req, res) => {
  const idTeam = req.params.id;
  const dataTeamPartId = await findOneByTeamId(idTeam);
  
  if (!dataTeamPartId) {
    return res.status(404).send('not found');
  };
  
  res.json(dataTeamPartId);
}

module.exports = {
  getTeams,
  getTeam,
  getTeamId
};