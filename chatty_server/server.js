const express = require('express');
const WebSocket = require('ws');
const uuid = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WebSocket.Server({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
      console.log(data);
    }
  });
};

const sendUserCount = () => {
  wss.clients.forEach(function each(client) {
    if (client.readyState === 1) {
      client.send(JSON.stringify({type:'count', userCount: wss.clients.size}));
    }
  });
}

wss.on('connection', (ws) => {
  console.log('Client connected');
  sendUserCount();
  ws.on('message', (data) =>{
    const receivedMessage = JSON.parse(data);
    console.log(receivedMessage, typeof receivedMessage);
    receivedMessage.id = uuid();
    wss.broadcast(JSON.stringify(receivedMessage));
  });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    sendUserCount();
    console.log('Client disconnected');
    });
});