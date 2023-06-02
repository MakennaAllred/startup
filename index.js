const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.arv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));


var apirouter = express.Router();
app.use(`/api`, apirouter);

myevents = []

apirouter.get('')