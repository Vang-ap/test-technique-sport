const Team = require('../models/team.model');

// find all teams
const findTeams = async () => {
  const teams = await Team.find();
  
  return teams;
};

// find a one team by id
const findOneByTeamId = async idTeams => {
  const teamPartId = await Team.findOne({_id: idTeams});
  
  return teamPartId;
};

// find a one team by name
const findTeam = async name => {
  const team = await Team.findOne({name});
  
  return team;
};

module.exports = {
  findTeams,
  findTeam,
  findOneByTeamId
};