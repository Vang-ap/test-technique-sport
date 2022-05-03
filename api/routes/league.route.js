const express = require('express');
const leagueRouter = express.Router()
const {getLeagues, getLeague, getLeagueId} = require('../controllers/controller.league');

leagueRouter.get('/all', getLeagues);
leagueRouter.get('', getLeague);
leagueRouter.get('/:id', getLeagueId);

module.exports = leagueRouter;