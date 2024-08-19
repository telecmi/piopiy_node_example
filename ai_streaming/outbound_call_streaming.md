# Piopiy Voice Call Example (Outbound Call Streaming)

This example shows how to set up outbound call streaming using the Piopiy package.

## Steps to run the code

### 1. Prerequisites

Before you start, ensure you have completed the [prerequisite steps](/README.md).

### 2. Configure the WebSocket URL and Call Parameters

Replace the values in the code with your actual data:

- [**app_id** & **app_secret**]()

- [**ws_url**]()

- [**customer_number**]()

- [**piopiy_number**]()

### Example usage

Replace the placeholders in the code with your actual values:

```javascript
const { Piopiy, PiopiyAction } = require("piopiy");
const piopiy = new Piopiy("your_app_id", "your_app_secret");
const action = new PiopiyAction();

const ws_url = "ws://example.tcp.ngrok.url"; // Your WebSocket TCP ngrok URL

const options = {
  listen_mode: "caller", // Determines which part of the call audio is captured and stored
};

const customer_number = "Customer number"; // Your customer phone number with country code.
const piopiy_number = "Your piopiy number"; // Your Piopiy number provided by the Piopiy TeleCMI platform.
const outbound_streaming_pcmo_function = action.PCMO(); // Use this PCMO function to start outbound call streaming.

action.stream(ws_url, options);

piopiy.voice.call(customer_number, piopiy_number, outbound_streaming_pcmo_function)
  .then((res) => {
    console.log("Success response:", res);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### 4. Run the server

Run the code with Node.js:

```sh
node ai_streaming/outbound_call_streaming.js
```

### 5. Create a Public WebSocket URL Using ngrok

To expose your local server to the internet, use ngrok to create public URL:

```sh
ngrok tcp 8080
```

Copy the ngrok TCP URL, which will look something like **tcp://0.tcp.ngrok.io**

### 6. Configure the WebSocket URL

Use the WebSocket TCP [ngrok URL]() for streaming. Set this URL in your Piopiy configuration for handling the voice data:

```sh
ws://0.tcp.ngrok.io:xxxxx
```

### 8. Expected Call Flow

When the code is executed, the call will follow these steps:

1. **Customer Receives Call:** The customer receives an outbound call from the Piopiy number.

2. **Call is Answered:** The customer answers the call.

3. **Voice Data is Streamed to WebSocket Server:** The voice call data from the caller (customer) is streamed to the WebSocket TCP ngrok URL.

### 8. Parameters type and description

These are the list of parameters and its description

#### Main parameters

| parameter       | Type   | Description                                                                      |
| --------------- | ------ | -------------------------------------------------------------------------------- |
| app_id          | number | Your app Id provided by Piopiy TeleCMI platform.                                 |
| app_secret      | string | Your app secret provided by Piopiy TeleCMI platform.                             |
| customer_number | number | The phone number of the customer receiving the call, including the country code. |
| piopiy_number   | number | The piopiy number provided by the Piopiy TeleCMI platform.                       |
| ws_url          | string | The WebSocket URL provided by the ngrok TCP service.                             |
| options         | object | An object containing optional parameters (listen_mode).                          |

#### Options parameters

| parameter   | Type   | Description                                                          |
| ----------- | ------ | -------------------------------------------------------------------- |
| listen_mode | string | Determines which part of the call audio is captured and stored <ul><li> **Caller:** The voice of the person who initiated the call will be recorded and stored.</li><li> **Calle:** The voice of the person receiving the call will be recorded and stored.</li><li> **Both:** the voices from both the caller and the callee will be recorded and stored.</li></ul> |