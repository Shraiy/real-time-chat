# Real-Time Chat Application

This is a simple real-time chat application that allows multiple users to communicate with each other in a shared chatroom. It uses WebSockets for real-time communication and is designed using **HTML**, **CSS**, **JavaScript** for the client-side and **Node.js** for the server-side.

### **Deployed Client-Side on GitHub Pages**

This version of the chat application is deployed as a client-side static site using GitHub Pages. The chat application connects to a WebSocket server for real-time messaging.

## Features
- Real-time messaging between multiple clients.
- Clean and responsive user interface.
- Messages are sent and received in real-time via WebSockets.
- Open multiple browser tabs to simulate multiple users.

## Architecture

### **Client-Side**
- The front-end is built with **HTML**, **CSS**, and **JavaScript**.
- The client-side connects to a WebSocket server to send and receive messages in real-time.
- The WebSocket connection is established with the URL of the WebSocket server (for local testing, it connects to `ws://localhost:8080`, but it can be updated for production servers).

### **Server-Side**
- The WebSocket server is built using **Node.js** with the `ws` library to handle real-time communication.
- The server listens for incoming WebSocket connections on a specified port (8080 by default).
- When a client sends a message, the server broadcasts it to all other connected clients.
- The server can be hosted on platforms like **Heroku**, **AWS**, or any other service that supports Node.js.

## Running the Application

### Prerequisites
- **Node.js**: You will need Node.js installed on your machine to run the server-side code.
- **Web Browser**: Any modern browser to access the client-side chat application.

### 1. Install Dependencies (For Server-Side)
If you want to run the WebSocket server locally, you can install the required dependencies:

- Open the terminal in the repository folder and run: 
- npm install
- This installs the ws WebSocket library, which is required for the server.

### 2. Run the Server (Locally)
To run the WebSocket server on your local machine, use the following command:

- Open the terminal in the repository folder and run:
- node server.js
- This will start the WebSocket server at ws://localhost:8080.

### 3. Deployment
- Access the application using the link:
- https://shraiy.github.io/real-time-chat/
- The message typed here by the client will be seen at the server on your local computer in the terminal.
