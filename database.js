const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');
const uuid = require('uuid');
const bcrpyt = require('bcrypt');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('cs260');
const eventcollection = db.collection('myevents');
const usercollection = db.collection('user');

(async function testConnection() {
    await client.connect();
    await db.command({ping : 1});
})
().catch((ex) => {
    console.log(`Can't connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(email){
    return usercollection.findOne({email:email});
}

function getUserbyToken(token){
    return usercollection.findOne({token: token});
}

async function createUser(email, password){
    const hashpass = await bcrpyt.hash(password, 7);
    const user = {
        email: email,
        password: hashpass,
        token: uuid.v4(),
    };
    await usercollection.insertOne(user);
    return user;
}

async function addEvent(event) {
    const result = await eventcollection.insertOne(event);
    return result;
}

async function getEvents(name) {
    const events = await eventcollection.find({eventuser: name}).toArray();
    console.log(events);
    return events;
}
async function getLatestEvent () {
    const latest = await eventcollection.findOne({}, {sort:{eventtime:-1}});
    return latest;
}
module.exports = {addEvent, getEvents, getLatestEvent, createUser, getUser, getUserbyToken};