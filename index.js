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
apirouter.post('/events/add', (req, res) => {
    const {eventname, eventtime} = req.body;
    const event = {eventname: eventname, eventtime:eventtime};
    myevents.push(event);
    res.json({ message: 'Event added successfully!'})})

//updating the latest event list
apirouter.get('/events/latest', (req,res) =>{
    const latest = myevents[myevents.length -1];
    res.json(latest);
})
