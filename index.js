const express = require('express');
const app = express();
const db = require('./database.js');

const port = 4000;

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


//get my events
apirouter.get('/events', async (req, res) => {
    const events = await db.getEvents();
    res.send(events)
})

//adding an event
apirouter.post('/events/add', async (req, res) => {
    const {eventname, eventtime} = req.body;
    const event = {eventname: eventname, eventtime:eventtime};
    await db.addEvent(event);
    res.json({ message: 'Event added successfully!'})})

//updating the latest event list
apirouter.get('/events/latest', async (req,res) =>{
    const latest = await db.getLatestEvent();
    res.json(latest);
})
