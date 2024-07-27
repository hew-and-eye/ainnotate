import express from "express";
import { WebSocketServer } from "ws";
import ollama from "ollama";

const app = express();
const port = 3210;

// Set up HTTP server
const server = app.listen(port, () => {
  console.log(`HTTP server is running on http://localhost:${port}`);
});

// Set up WebSocket server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message: string) => {
    console.log(`Received message: ${message}`);
    ws.send(`You said "${message}"`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
