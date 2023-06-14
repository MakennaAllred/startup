const express = require('express');
const app = express();
const db = require('./database.js');
const cookieParser = require('cookie-parser');
const bcrpyt = require('bcrypt');
const authcookie = 'token';
const {peerProxy, send} =require('./peerproxy.js');

const port = 4000;

//uses cookies for auth tokens
app.use(cookieParser());

//uses json
app.use(express.json());

//for static files
app.use(express.static('public'));

app.set('trust proxy', true);

//router for service endpoints
var apirouter = express.Router();
app.use(`/api`, apirouter);

// get an array of logged-in users
apirouter.get('/api/loggedin', (req, res) =>{
    User.find({isLoggedin: true})
    .then ((users) =>{
        res.json(users);
        buildAccordionList(users);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
})


//get my events
apirouter.get('/events/:user', async (req, res) => {
    let user = req.params.user;
    // console.log(user);
    const events = await db.getEvents(user);
    res.send(events)
})

//adding an event
apirouter.post('/events/add', async (req, res) => {
    console.log("add was called")
    const {eventuser, eventname, eventtime} = req.body;
    const event = {eventuser: eventuser, eventname: eventname, eventtime:eventtime};
    const msg = `${eventuser} scheduled ${eventname} at ${eventtime}`;
    await db.addEvent(event);
    send(msg);
    console.log(msg);
    res.json({ message: 'Event added successfully!'})
})

//updating the latest event list
apirouter.get('/events/latest', async (req,res) =>{
    const latest = await db.getLatestEvent();
    res.json(latest);
})

apirouter.post('/auth/create', async (req,res) => {
    // console.log(req.body);
    if (await db.getUser(req.body.email)) {
        res.status(409).send({msg: 'Already a user'});
    }
    else{
        const user = await db.createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
        res.send({
            id: user._id,
        });
    }
});

//gets token for a specific user
apirouter.post('/auth/login', async (req,res) => {
    // console.log('post');
    const user = await db.getUser(req.body.email);
    if(user) {
        if (await bcrpyt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({id: user._id});
            return;
        }
    }
    res.status(401).send({msg: "Unauthorized"});
});

//delete authentication token if stored in a cookie
apirouter.delete('/auth/logout', (req,res) => {
    res.clearCookie(authcookie);
    res.status(204).end();
});

//gets user info
apirouter.get('/user/:email', async (req, res) => {
    const user = await db.getUser(req.params.email);
    if (user) {
        const token = req?.cookies.token;
        res.send({
            email:user.email, authenticated: token === user.token
        }); return; 
    }
    res.status(404).send({msg: "Not found"});
});

var secureapirouter = express.Router();
apirouter.use(secureapirouter);

secureapirouter.use(async (req, res, next) => {
    authtoken = req.cookies[authcookie];
    const user = await db.getUserbyToken(authcookie);
    if (user) {
        next()
    }
    else{
        res.status(401).send({msg: "Unauthorized"});
    }
});

function setAuthCookie(res, authtoken){
    res.cookie(authcookie, authtoken,{
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

//tells what port to use
const httpService = app.listen(port, () => {
    // console.log(`listening on port ${port}`);
});

peerProxy(httpService);