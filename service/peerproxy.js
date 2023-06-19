const {WebSocketServer} = require('ws');
const uuid = require('uuid');

 //keeps track of connections
 let connections = [];

 // forwards messages to everyone but sender
 function send (message) {
     connections.forEach((c) => {
        c.ws.send(message);
     });
 };

function peerProxy(httpServer){
    const wss = new WebSocketServer({noServer: true});


    httpServer.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    })

   

    wss.on('connection', (ws) => {
        const connection = { id: uuid.v4(), alive: true, ws: ws};
        connections.push(connection); //adds connection to array 


    

        //remove closed connection
        ws.on('close', () =>{
            connections.findIndex((o,i) => {
                if(o.id === connection.id) {
                    connections.splice(i,1);
                    return true;
                }
            });
        });

    //responds to pong and keeps connection alive
        ws.on('pong', () => {
            connection.alive = true;
        });
    });

    setInterval(() =>{
        connections.forEach((c) => {
            if(!c.alive){
                c.ws.terminate();
            }
            else{
                c.alive = false;
                c.ws.ping();
            }
        });
    }, 10000);
}

module.exports = {peerProxy, send};