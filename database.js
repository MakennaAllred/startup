const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('cs260');
const eventcollection = db.collection('myevents');

(async function testConnection() {
    await client.connect();
    await db.command({ping : 1});
})
().catch((ex) => {
    console.log(`Can't connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

async function addEvent(event) {
    const result = await eventcollection.insertOne(event);
    return result;
}

async function getEvents() {
    const events = await eventcollection.find({}).toArray();
    return events;
}
async function getLatestEvent () {
    const latest = await eventcollection.findOne({}, {sort:{eventtime:-1}});
    return latest;
}
module.exports = {addEvent, getEvents, getLatestEvent};