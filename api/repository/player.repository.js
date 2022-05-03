const Player = require('../models/player.model')

// find all players
const findPlayers = async () => {
  const players = await Player.find();
  
  return players;
}

// find a player by name
const findPlayer = async name => {
  const player = await Player.findOne({name});
  
  return player;
}

// find a player by id
const findOneByPlayerId = async idPlayer => {
  const playerPartId = await Player.findOne({_id: idPlayer});
  
  return playerPartId;
}

module.exports = {
  findPlayers,
  findPlayer,
  findOneByPlayerId
};
