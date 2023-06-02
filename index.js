const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.arv[2] : 4000;

//uses json
app.use(express.json());

//for static files
app.use(express.static('public'));

//router for service endpoints
var apirouter = express.Router();
app.use(`/api`, apirouter);

//tells what port to use
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

myevents = []

//get my events
apirouter.get('/events', (req, res) => {
    res.send(myevents)
})

//adding an event
apirouter.post('/events/add', (req, res) =>)