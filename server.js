const http = require('http');
const WebSocket = require('ws');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('WebSocket server is running.');
});

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

let clients = []; // Store connected clients

wss.on('connection', (ws) => {
    console.log('New client connected.');
    clients.push(ws);

    // Notify others of a new connection
    broadcast('A new user has joined the chat.', ws);

    // Handle incoming messages
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        broadcast(message, ws); // Broadcast to other clients
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected.');
        clients = clients.filter((client) => client !== ws);
        broadcast('A user has left the chat.', ws);
    });
});

// Broadcast message to all connected clients except the sender
function broadcast(message, sender) {
    clients.forEach((client) => {
        if (client !== sender && client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
