const Team = require('../models/team.model');

// récupérer une équipe
const findTeam = async name => {
  const team = await Team.findOne({name})
  return team
};

module.exports = {
  findTeam
};