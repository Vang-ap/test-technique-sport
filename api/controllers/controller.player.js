const {findPlayers, findPlayer} = require('../repository/player.repository');

const getPlayers = async (req, res) => {
  const dataPlayers = await findPlayers();
  
  if(!dataPlayers) {
    return res.status(404).send('not found');
  };
  
  res.json(dataPlayers);
}

const getPlayer = async (req, res) => {
  const namePlayer = req.query.name;
  const dataPlayer = await findPlayer(namePlayer);
  
  if(!dataPlayer) {
    return res.status(404).send('not found');
  };
  
  res.json(dataPlayer);
}

module.exports = {
  getPlayers,
  getPlayer
};