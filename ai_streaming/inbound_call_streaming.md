# Piopiy Voice Call Example (Inbound Call Streaming)

This example shows how to set up inbound call streaming using the Piopiy package.

## Steps to run the code

### 1. Prerequisites

Before you start, ensure you have completed the [prerequisite steps](/README.md).

### 2. Configure the WebSocket URL and HTTP URL

Replace the values in the [Inbound call stream](/ai_streaming//inbound_call_streaming.js) code with your ngrok URL:

- [**ws_url**]()

### 3. Create and run the Express.js server

Create a simple Express.js server to handle inbound call streams:

```javascript
const express = require("express");
const { PiopiyAction } = require("piopiy");
const app = express();
app.use(express.json());

app.post("/stream", (req, res) => {
  const action = new PiopiyAction();
  const ws_url = "ws://example.tcp.ngrok.url"; // Your WebSocket TCP ngrok URL

  const options = {
    listen_mode: "both", // Determines which part of the call audio is captured and stored
  };

  action.call(ws_url, options);
  res.send(action.PCMO());
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
```

### 4. Run the server

Run the Express.js server:

```sh
node ai_streaming/inbound_call_streaming.js
```

### 5. Create public URLs using ngrok

To expose your local server to the internet, use ngrok to create public URLs:

**1.For WebSocket TCP:**

```sh
ngrok tcp 8080
```

Copy the ngrok TCP URL, which will look something like **tcp://0.tcp.ngrok.io**

**2.For HTTP:**

```sh
ngrok http 3001
```

Copy the ngrok HTTP URL, which will look something like **https://example.ngrok.io**

### 6. Configure the Piopiy dashboard

Log in to your <a href="https://developer.telecmi.com" target="_blank">Piopiy dashboard</a> and configure it using the HTTP ngrok URL:

- Paste the HTTP ngrok URL into the "Answer URL" input field.

- Ensure the endpoint is set correctly to handle inbound calls.

```sh
https://example.ngrok.io/stream
```

### 7. Configure the WebSocket URL

Use the WebSocket TCP ngrok URL for streaming. Set this URL in your Piopiy configuration for handling the voice data:

```sh
ws://0.tcp.ngrok.io:xxxxx
```

### 8. Expected Call Flow

When the code is executed, the call will follow these steps:

1. **Customer Calls Piopiy Number:** The customer initiates the call to the agent Piopiy number.

2. **Agent Answers the Call:** The agent receives and answers the call.

3. **Voice Data is Streamed to WebSocket Server:** The voice call data from both the caller (customer) and the callee (agent) is streamed to the WebSocket TCP ngrok URL.

This setup ensures that your inbound call stream can handle voice data effectively using the Piopiy package, with both HTTP and WebSocket configurations in place.

### 9. Parameters type and description

These are the list of parameters and its description

#### Main parameters

| parameter | Type   | Description                                             |
| --------- | ------ | ------------------------------------------------------- |
| ws_url    | string | The WebSocket URL provided by the ngrok TCP service.    |
| options   | object | An object containing optional parameters (listen_mode). |

#### Options parameters

| parameter   | Type   | Description                                                          |
| ----------- | ------ | -------------------------------------------------------------------- |
| listen_mode | string | Determines which part of the call audio is captured and stored <ul><li> **Caller:** The voice of the person who initiated the call will be recorded and stored.</li><li> **Calle:** The voice of the person receiving the call will be recorded and stored.</li><li> **Both:** the voices from both the caller and the callee will be recorded and stored.</li></ul> |