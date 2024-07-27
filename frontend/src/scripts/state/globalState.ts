// @ts-ignore
import { stateObject } from "lil-framework/dist/stateObject";

const globalContext = {};

export const globalState = stateObject(globalContext, {
  data: {
    socket: createSocket.call(globalContext),
  },
});

function createSocket() {
  // Initialize WebSocket connection to localhost:3210
  const socket = new WebSocket("ws://localhost:3210");

  this.messages ||= []

  // Event listener for when a message is received
  socket.onmessage = (event) => {
    console.log("got a message")
    // Append received message to this.messages
    this.messages = [...this.messages, event];
  };

  // Event listener for WebSocket connection errors
  socket.onerror = (error) => {
    console.error("WebSocket Error:", error);
  };

  // Event listener for when the WebSocket connection is closed
  socket.onclose = (event) => {
    console.log("WebSocket connection closed:", event);
  };

  // Event listener for when the WebSocket connection is established
  socket.onopen = () => {
    console.log("WebSocket connection established");
  };

  // Return the WebSocket instance
  return socket;
}
