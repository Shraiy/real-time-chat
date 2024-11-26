const http = require('http');
const WebSocket = require('ws');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('WebSocket server is running.');
});

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

let clients = new Set(); // Use Set for client storage to avoid duplicates

wss.on('connection', (ws) => {
    console.log('New client connected.');

    // Add client to the set of connected clients
    clients.add(ws);

    // Notify others of a new connection
    broadcast({ message: 'A new user has joined the chat.' }, ws);

    // Handle incoming messages
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Broadcast the message to all clients
        broadcast({ message, sender: 'User' }, ws); // You can include additional metadata here
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected.');
        // Remove the client from the set
        clients.delete(ws);
        // Notify other clients that someone left
        broadcast({ message: 'A user has left the chat.' }, ws);
    });

    // Handle errors (optional)
    ws.on('error', (error) => {
        console.error('WebSocket Error:', error);
    });
});

// Broadcast message to all connected clients except the sender
function broadcast(data, sender) {
    const message = JSON.stringify(data); // Send data as JSON

    clients.forEach((client) => {
        if (client !== sender && client.readyState === WebSocket.OPEN) {
            client.send(message); // Send the message to other clients
        }
    });
}

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
