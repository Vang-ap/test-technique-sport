const express = require('express');

const leagueRouter = express.Router()

const {getLeagues, getLeague} = require('../controllers/controller.league');

leagueRouter.get('/all', getLeagues);
leagueRouter.get('', getLeague);

module.exports = leagueRouter;