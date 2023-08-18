const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let behandlingsnummer = 0;
let lopenummer = 0;
let antall = 0;

app.get('/api/behandlingsnummer', (req, res) => {
  res.json({ behandlingsnummer });
});

app.get('/api/lopenummer', (req, res) => {
  res.json({ lopenummer });
});

app.get('/api/antall', (req, res) => {
    const antall = lopenummer - behandlingsnummer;
    res.json({ antall });
});

app.post('/api/lopenummer', (req, res) => {
  lopenummer++;
  if (lopenummer < behandlingsnummer) {
    lopenummer = behandlingsnummer;
  }
  broadcast({ type: 'lopenummerUpdate', lopenummer }); // Send oppdatering til alle klienter
  res.json({ lopenummer });
});

app.post('/api/increment', (req, res) => {
  behandlingsnummer++;
  broadcast({ type: 'behandlingsnummerUpdate', behandlingsnummer }); // Send oppdatering til alle klienter
  res.json({ success: true });
});

app.post('/api/reset', (req, res) => {
  behandlingsnummer = 0;
  lopenummer = 0;
  antall = 0;
  broadcast({ type: 'reset' }); // Send oppdatering til alle klienter
  res.json({ success: true });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function broadcast(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

wss.on('connection', (ws) => {
  // Du kan legge til eventuelle handlinger ved tilkobling her
});

server.listen(3000, () => {
  console.log('WebSocket server is running on port 3000');
});
