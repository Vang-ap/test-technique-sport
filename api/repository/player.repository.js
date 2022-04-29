const Player = require('../models/player.model')

// récupérer un joueur
const findPlayer = async name => {
  const player = await Player.findOne({name})
  return player
}

module.exports = {
  findPlayer
}