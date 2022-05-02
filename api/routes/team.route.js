const express = require('express');

const teamRouter = express.Router();

const {getTeams, getTeam, getTeamId} = require('../controllers/controller.team');

teamRouter.get('/all', getTeams);
teamRouter.get('', getTeam);
teamRouter.get('/id', getTeamId)

module.exports = teamRouter;