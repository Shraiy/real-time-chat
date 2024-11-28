# Real-Time Web Chat Application
## Overview
This is a simple real-time chat application built using WebSockets, which allows users to communicate in a chat room. The server-side WebSocket is hosted on Render, and the client-side is deployed on GitHub Pages.

## Features
- Real-time messaging using WebSocket.
- Displays the message for every connected user when sent.
- Notifications when a new user joins or leaves the chat.
- The chat is updated instantly across multiple tabs.
## Project Architecture
### Client-Side (index.html)
The client-side is built using basic HTML, CSS, and JavaScript. It establishes a WebSocket connection to the server hosted on Render.

- HTML: Creates the chat interface (message input, send button, message window).
- CSS: Styles the chat window to make it visually appealing.
- JavaScript: Handles the WebSocket connection, sends and receives messages, and dynamically updates the UI when messages are received.
### Server-Side (server.js)
The server-side is built using Node.js with the ws library. The server listens for WebSocket connections, handles incoming messages, and broadcasts them to all connected clients. When a client disconnects, a notification is broadcasted to all remaining clients.

## Instructions to Run the Application Locally
Prerequisites
- Node.js should be installed on your local machine.
- Ensure you have a GitHub account to view the client-side repository.
- Step 1: Clone the repository
View and Download the following repository by the given link:
[Github](https://github.com/Shraiy/real-time-chat)
- Step 2: Install dependencies
To install the necessary dependencies for the server open command prompt in your computer and run the following command:
#### npm install
- Step 3: Run the server
Start the WebSocket server using:
#### node server.js
This will start the WebSocket server on http://localhost:8080.

- Step 4: Open the chat application in your browser
Open the index.html file in your browser to connect to the server and start chatting.

## How Concurrency is Handled
The application uses a WebSocket server to handle multiple concurrent users. Every time a new user connects, they are added to a list of connected clients on the server. When a message is sent from any client, it is broadcast to all other connected clients, ensuring real-time communication.

### The WebSocket server uses the following approach to handle concurrency:

- WebSocket connections are managed using a set of connected clients.
- Broadcasting messages: When a message is sent, the server sends it to all other clients, ensuring that the messages are visible to all participants.
- The use of WebSockets ensures that the server can handle real-time bidirectional communication with minimal latency.

## Assumptions and Design Choices
### WebSocket Communication:

- WebSockets are used for real-time communication due to their ability to maintain a persistent connection between the client and the server.
- The WebSocket protocol is more efficient than HTTP for chat applications because it allows messages to be pushed to clients without needing constant polling.
## Message Broadcasting:

The server broadcasts messages to all connected clients except the sender to maintain the real-time nature of the chat application.
### Client-Side Deployment:

The client-side is hosted on GitHub Pages, which allows for free and easy deployment without the need for a backend.
### Server-Side Deployment:

The server-side is hosted on Render. This provides a simple, scalable cloud environment for hosting the WebSocket server.
## How to Access the Deployed Application
The deployed client-side chat application is available on GitHub Pages at the following URL:

[Application](https://shraiy.github.io/real-time-chat/)

The WebSocket server is hosted on Render at:

[Render WebSocket Server](https://real-time-chat-5hbq.onrender.com)

Once the client is loaded in your browser, it will automatically connect to the WebSocket server on Render. You can start chatting with users across different tabs or devices.

## Additional Information
### Technologies Used:

- Frontend: HTML, CSS, JavaScript (Client-side)
- Backend: Node.js, WebSocket (Server-side)
#### Deployment:

- Frontend: GitHub Pages
- Backend: Render
- WebSocket Server: The WebSocket server is deployed on Render to ensure a stable and scalable environment for handling real-time messages.

## Conclusion
This real-time chat application demonstrates the use of WebSockets for instant communication. By leveraging platforms like GitHub Pages for front-end deployment and Render for backend hosting, the application is fully functional and scalable. Feel free to clone and modify this repository to build upon this basic chat application.

