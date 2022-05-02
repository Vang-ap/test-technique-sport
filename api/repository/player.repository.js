const Player = require('../models/player.model')

// récupérer la liste des joueurs
const findPlayers = async () => {
  const players = await Player.find()
  return players
}


// récupérer un joueur
const findPlayer = async name => {
  const player = await Player.findOne({name})
  return player
}

module.exports = {
  findPlayers,
  findPlayer
};
