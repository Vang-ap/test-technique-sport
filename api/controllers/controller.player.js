const {findPlayers, findPlayer, findOneByPlayerId} = require('../repository/player.repository');

// get all Players
const getPlayers = async (req, res) => {
  const dataPlayers = await findPlayers();
  
  if (!dataPlayers) {
    return res.status(404).send('not found');
  };
  
  res.json(dataPlayers);
}

// get a player by name
const getPlayer = async (req, res) => {
  const namePlayer = req.query.name;
  const dataPlayer = await findPlayer(namePlayer);
  
  if (!dataPlayer) {
    return res.status(404).send('not found');
  };
  
  res.json(dataPlayer);
}

// get a player by id
const getPlayerPartId = async (req, res) => {
  const idPlayer = req.params.id;
  const dataPlayerId = await findOneByPlayerId(idPlayer);
  
  if (!dataPlayerId) {
    return res.status(404).send('not found');
  };
  
  res.json(dataPlayerId);
}

module.exports = {
  getPlayers,
  getPlayer,
  getPlayerPartId
};