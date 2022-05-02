const Team = require('../models/team.model');

// récupérer la liste des équipes
const findTeams = async () => {
  const teams = await Team.find()
  return teams
};

// récupérer une équipes par l'id
const findTeamId = async idTeams => {
  const teampartId = await Team.find({idTeams})
  return teampartId
};

// récupérer une équipe
const findTeam = async name => {
  const team = await Team.findOne({name})
  return team
};

module.exports = {
  findTeams,
  findTeam,
  findTeamId
};