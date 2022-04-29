const express = require('express');

const teamRouter = express.Router();

const getTeam = require('../controllers/controller.team');

teamRouter.get('', getTeam);

module.exports = teamRouter;