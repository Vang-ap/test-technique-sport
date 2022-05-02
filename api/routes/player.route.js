const express = require('express');

const playerRouter = express.Router();

const {getPlayers, getPlayer} = require('../controllers/controller.player');

playerRouter.get('/all', getPlayers);
playerRouter.get('', getPlayer);

module.exports = playerRouter;