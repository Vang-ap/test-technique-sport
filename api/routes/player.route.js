const express = require('express');
const playerRouter = express.Router();
const {getPlayers, getPlayer, getPlayerPartId} = require('../controllers/controller.player');

playerRouter.get('/all', getPlayers);
playerRouter.get('', getPlayer);
playerRouter.get('/:id', getPlayerPartId)

module.exports = playerRouter;