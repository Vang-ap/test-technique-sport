require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const leagueRouter = require('./routes/league.route');
const teamRouter = require('./routes/team.route');

const app = express();
const env = process.env;

const hostname = env.HOST;
const port = env.PORT;
const userNameMongo = env.MONGO_USERNAME;
const passwordMongo = env.MONGO_PASSWORD;
const portMongo = env.PORT_MONGO;

const mongoUrl = `mongodb://${userNameMongo}:${passwordMongo}@${hostname}:${portMongo}/sports`;

mongoose.connect(mongoUrl, {authSource: 'admin'});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose")
});

app.use(cors());

app.use('/league', leagueRouter);
app.use('/team', teamRouter);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

