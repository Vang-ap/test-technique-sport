const express = require('express');

const leagueRouter = express.Router()

const getLeague = require('../controllers/controller.league')

leagueRouter.get('', getLeague);

module.exports = leagueRouter;